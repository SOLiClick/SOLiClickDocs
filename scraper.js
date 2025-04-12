const puppeteer = require('puppeteer');
const TurndownService = require('turndown');
const fs = require('fs-extra');
const path = require('path');

// 🔗 URL GitBook
const START_URL = 'https://click-me.gitbook.io/click-me-docs';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();
  await page.goto(START_URL, { waitUntil: 'networkidle2' });

  // ⏳ Подождать пока хоть что-то отрисуется
  await page.waitForSelector('body', { timeout: 10000 });

  // 🧠 Ищем ссылки из меню (сайдбар)
  const links = await page.evaluate(() => {
    const candidates = [
      '[data-testid="sidebar"]',
      'nav',
      '[class*="sidebar"]',
      '[class*="navigation"]',
      'aside',
      '[class*="menu"]',
      'div.scroll-nojump'
    ];

    let sidebar;
    for (const selector of candidates) {
      const el = document.querySelector(selector);
      if (el && el.querySelectorAll('a[href]').length > 0) {
        sidebar = el;
        break;
      }
    }

    const anchors = sidebar ? sidebar.querySelectorAll('a[href]') : [];
    return Array.from(anchors).map(a => a.href);
  });

  // 🧹 Убираем мусорные ссылки
  const filteredLinks = links.filter(link =>
    link.startsWith('http') &&
    !link.includes('utm_') &&
    !link.includes('#') &&
    !link.endsWith('/')
  );

  console.log(`🔗 Найдено ссылок: ${filteredLinks.length}`);
  if (filteredLinks.length === 0) {
    console.warn('❌ Не удалось найти ссылки. Проверь селектор навигации.');
    await browser.close();
    return;
  }

  const turndownService = new TurndownService();
  await fs.ensureDir('pages');

  for (let link of filteredLinks) {
    console.log(`📄 Обрабатываем: ${link}`);
    await page.goto(link, { waitUntil: 'networkidle2' });

    // ⏳ Пытаемся дождаться main
    try {
      await page.waitForSelector('main', { timeout: 10000 });
    } catch (e) {
      console.warn(`⚠️ Контент не найден на: ${link}`);
      continue;
    }

    // 💾 Забираем и сохраняем контент
    const content = await page.evaluate(() => {
      const el = document.querySelector('main');
      return el ? el.innerHTML : '';
    });

    const markdown = turndownService.turndown(content);
    const name = link.split('/').filter(Boolean).pop().replace(/[^a-z0-9-_]/gi, '_');
    const filePath = path.join('pages', `${name}.md`);
    await fs.writeFile(filePath, markdown, 'utf-8');
  }

  await browser.close();
  console.log('✅ Готово! Все страницы сохранены в /pages');
})();
