1.  [User Guides](/click-me-docs/user-guides)

Troubleshooting
===============

This guide provides solutions to common issues you might encounter while using the Click-Me platform.

[](#connection-issues)

Connection Issues


---------------------------------------------

### 

[](#wallet-wont-connect)

Wallet Won't Connect

**Symptoms:**

*   "Connect Wallet" button doesn't respond
    
*   Wallet popup appears but then disappears
    
*   Connection appears to succeed but then disconnects
    

**Solutions:**

1.  Refresh the page and try connecting again
    
2.  Ensure your wallet extension is up to date
    
3.  Check that you're on the correct network (Mainnet)
    
4.  Try clearing browser cache and cookies
    
5.  Disable other wallet extensions temporarily
    
6.  Try a different supported browser
    

### 

[](#network-congestion)

Network Congestion

**Symptoms:**

*   Transactions take a long time to confirm
    
*   Click actions don't register immediately
    
*   "Transaction failed" errors
    

**Solutions:**

1.  Increase the priority fee slightly (if your wallet supports this)
    
2.  Wait for network congestion to decrease
    
3.  Check Solana network status for any outages
    
4.  Ensure your wallet has the latest RPC endpoints
    

[](#game-interaction-issues)

Game Interaction Issues


---------------------------------------------------------

### 

[](#button-click-not-registering)

Button Click Not Registering

**Symptoms:**

*   You approve a transaction but the timer doesn't reset
    
*   Your wallet shows the transaction as confirmed, but you're not shown as the last clicker
    

**Solutions:**

1.  Check your transaction on Solana Explorer to verify its status
    
2.  Refresh the page to sync with the latest chain state
    
3.  Ensure you have sufficient SOL for the current click cost plus fees
    
4.  Verify you're interacting with the correct game contract
    
5.  Check that the game hasn't ended while your transaction was pending
    

### 

[](#new-game-wont-start)

New Game Won't Start

**Symptoms:**

*   "Start New Game" button doesn't work
    
*   Transaction fails when trying to start a new game
    

**Solutions:**

1.  Ensure the previous game has ended (timer has expired)
    
2.  Verify you have at least 3 SOL plus transaction fees
    
3.  If you were the previous winner, check if you received your rewards
    
4.  Refresh the page to get the latest game state
    
5.  Try again after a short delay (1-2 minutes)
    

[](#staking-issues)

Staking Issues


---------------------------------------

### 

[](#cant-stake-tokens)

Can't Stake Tokens

**Symptoms:**

*   Stake transaction fails
    
*   Tokens remain in wallet after attempting to stake
    
*   "Error initializing stake account" message
    

**Solutions:**

1.  Ensure you have sufficient SOL for transaction fees
    
2.  Check that you're holding the correct Click-Me token
    
3.  Verify you're connected with the wallet containing the tokens
    
4.  Try staking a smaller amount first
    
5.  Initialize a stake account first if this is your first time staking
    

### 

[](#cant-claim-rewards)

Can't Claim Rewards

**Symptoms:**

*   Claim button doesn't work
    
*   Transaction fails when claiming
    
*   Rewards shown but not received
    

**Solutions:**

1.  Ensure you have sufficient SOL for transaction fees
    
2.  Verify that you have accumulated rewards (minimum amount may apply)
    
3.  Check if a previous claim transaction is still pending
    
4.  Refresh the page to get the latest reward calculation
    
5.  Try claiming again after a few minutes
    

### 

[](#unstaking-problems)

Unstaking Problems

**Symptoms:**

*   Unable to request unstake
    
*   Cannot claim tokens after unstake period
    
*   Lockup timer seems incorrect
    

**Solutions:**

1.  Verify the stake lockup period has elapsed (7 days from staking)
    
2.  For claims, ensure the unstake lockup period has elapsed (7 days from requesting unstake)
    
3.  Check the exact timestamp of your original stake/unstake request
    
4.  Ensure you have sufficient SOL for transaction fees
    
5.  Refresh the page to sync with the latest chain state
    

[](#reward-distribution-issues)

Reward Distribution Issues


---------------------------------------------------------------

### 

[](#missing-winner-rewards)

Missing Winner Rewards

**Symptoms:**

*   You were the last clicker but didn't receive rewards
    
*   Winner rewards seem smaller than the displayed pot
    

**Solutions:**

1.  Verify a new game has been started (rewards are distributed on new game start)
    
2.  Check the transaction history on a Solana explorer
    
3.  Confirm you were truly the last clicker (someone might have clicked after you)
    
4.  Verify you're checking the correct wallet address for rewards
    
5.  Contact support with the game ID and transaction details
    

### 

[](#staking-rewards-lower-than-expected)

Staking Rewards Lower Than Expected

**Symptoms:**

*   Claimed rewards are less than displayed
    
*   Reward estimate seems too low
    

**Solutions:**

1.  Remember rewards are proportional to your share of the total staked amount
    
2.  Check recent game activity (fewer games = fewer rewards)
    
3.  Verify when you staked (rewards only accumulate after staking)
    
4.  Understand that the interface shows estimates that might change with market conditions
    
5.  Check your calculation against the formula: `Your Rewards = Total Rewards × (Your Stake ÷ Total Staked)`
    

[](#technical-troubleshooting)

Technical Troubleshooting


-------------------------------------------------------------

### 

[](#transaction-error-codes)

Transaction Error Codes

Error

Meaning

Solution

`GameEnded`

The timer expired

Start a new game

`GameNotEnded`

The timer is still active

Wait for the timer to expire

`InsufficientFunds`

Not enough SOL

Add more SOL to your wallet

`MustStartNewGame`

No active game

Start a new game

`UnstakeLockupActive`

Lockup period not over

Wait for the lockup period to end

`InvalidWinner`

Incorrect winner address

Verify the correct last clicker

### 

[](#additional-resources)

Additional Resources

If the solutions above don't resolve your issue:

1.  **Check Status Page**: \[Click-Me Status Page URL\]
    
2.  **Explorer Tools**: Verify transactions on [Solana Explorer](https://explorer.solana.com/) or [Solscan](https://solscan.io/)
    
3.  **Community Support**: Join our \[Discord/Telegram\] for community assistance
    
4.  **Contact Support**: Submit a ticket at \[Support URL\] with:
    
    *   Your wallet address
        
    *   Transaction ID (if applicable)
        
    *   Detailed description of the issue
        
    *   Screenshots if available
        
    

[PreviousFrequently Asked Questions](/click-me-docs/user-guides/frequently-asked-questions)

Last updated 21 days ago