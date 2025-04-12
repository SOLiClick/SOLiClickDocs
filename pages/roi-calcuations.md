1.  [Game Mechanics](/click-me-docs/game-mechanics)

ROI Calculation
===============

In this game, players compete to be the last to click a button before a 3-minute timer expires, winning the entire pot if no one clicks again. Each click increases the cost, adds to the pot, and resets the timer. This document explains the Return on Investment (ROI) to illuminate the reward structure across thousands of clicks.

[](#how-the-game-works)

How the Game Works


-----------------------------------------------

*   **Starting Pot**: 2.7 SOL
    
*   **Click Cost**: Starts at 0.01 SOL, increases by 0.01 SOL per click
    
    *   Click 1: 0.01 SOL
        
    *   Click 2: 0.02 SOL
        
    *   Click 3: 0.03 SOL, etc.
        
    
*   **Pot Growth**: Each click’s cost is added to the pot
    
*   **Timer**: Resets to 3 minutes with each click
    
*   **Winning**: The last player to click before the timer runs out wins the pot
    

[](#what-is-roi)

What is ROI?


----------------------------------

ROI measures your potential return relative to your click cost, assuming you’re the last clicker:

**ROI = (Pot Before Your Click) / (Your Click Cost)**

If you win, you claim the pot after your click. ROI shows how many times your cost you’d recover.

### 

[](#examples)

Examples

*   **Click 1**: Cost = 0.01 SOL, Pot Before = 2.70 SOL
    
    *   ROI = 2.70 / 0.01 = **270**
        
    
*   **Click 2**: Cost = 0.02 SOL, Pot Before = 2.71 SOL
    
    *   ROI = 2.71 / 0.02 = **135.5**
        
    
*   **Click 1000**: Cost = 10.00 SOL, Pot Before = 252.70 SOL
    
    *   ROI = 252.70 / 10.00 = **499.77**
        
    

[](#the-roi-formula)

The ROI Formula


-----------------------------------------

For the ( n )-th click:

*   **Cost**: ( 0.01 \\times n ) SOL
    
*   **Pot Before**: ( 2.7 + 0.005 \\times (n - 1) \\times n ) SOL
    
*   **ROI**:
    

**ROI = (270 / n) + (n - 1) / 2**

*   ( 270 / n ): High early, decreases with ( n )
    
*   ( (n - 1) / 2 ): Grows as clicks accumulate
    

[](#roi-over-thousands-of-clicks)

ROI Over Thousands of Clicks


-------------------------------------------------------------------

ROI evolves as clicks increase:

Click (( n ))

Cost (SOL)

Pot Before (SOL)

ROI

1

0.01

2.70

270.00

10

0.10

2.75

31.50

23

0.23

2.93

22.74 (min)

100

1.00

5.20

52.20

500

5.00

63.45

249.90

1000

10.00

252.70

499.77

1500

15.00

566.95

749.64

2000

20.00

1001.20

999.52

### 

[](#visualization)

Visualization

![](https://click-me.gitbook.io/~gitbook/image?url=https%3A%2F%2F2848186717-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FpBAnJ8FCmL9GEeklUa6Q%252Fuploads%252Fgit-blob-59668cf964595006685a7baede8471ed69df1441%252Froi-chart.png%3Falt%3Dmedia&width=768&dpr=4&quality=100&sign=a33b7f85&sv=2)

See the ROI trend up to 420 clicks

[](#reward-dynamics-shift)

Reward Dynamics Shift


-----------------------------------------------------

*   **Early Game (1–100 Clicks)**: ROI drops from 270 to a minimum of 22.74 at ( n = 23 ), then rises to 52.20. High early rewards tempt players, but others can follow.
    
*   **Mid-Game (100–1000 Clicks)**: ROI grows to 499.77, as the pot swells. Costs rise, but so does the prize.
    
*   **Late Game (1000–2000 Clicks)**: ROI reaches 999.52, trending toward ( n / 2 ). Late clicks offer big returns if you’re last.
    

[](#strategic-insights)

Strategic Insights


-----------------------------------------------

*   **Early Advantage**: High ROI (e.g., 270) early on, but low win odds unless the game ends fast.
    
*   **Mid-Game Dip**: Lowest ROI (~22.74) around 23 clicks—higher risk per SOL.
    
*   **Late Opportunity**: ROI scales with ( n ), favoring late snipers as the pot grows massive.
    

[](#play-smart)

Play Smart


-------------------------------

*   **Time It**: Early for high ROI, late to win big.
    
*   **Watch the Clock**: Click near 3 minutes to maximize your last-click chance.
    
*   **Risk vs. Reward**: Balance ROI with the likelihood of being outclicked.
    

This mechanic fuels excitement: early clicks build the pot, late clicks chase it. Use this guide to strategize effectively.

[PreviousFee Guide](/click-me-docs/game-mechanics/fees-guide)[NextStaking Overview](/click-me-docs/staking-system/overview)

Last updated 10 days ago