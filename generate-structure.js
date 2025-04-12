const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

let summaryLines = ['# Summary\n'];

files.forEach((file) => {
  const title = file.replace(/[-_]/g, ' ').replace(/\.md$/, '');
  const link = `pages/${file}`;
  summaryLines.push(`* [${title}](./${link})`);
});

// Save SUMMARY.md
fs.writeFileSync('SUMMARY.md', summaryLines.join('\n'), 'utf-8');

// Save .gitbook.yaml
fs.writeFileSync('.gitbook.yaml', `root: .\nstructure:\n  readme: ${'./' + files[0]}\n  summary: SUMMARY.md`, 'utf-8');

console.log('✅ Сгенерированы SUMMARY.md и .gitbook.yaml');
