# Using Mint Signal in a Solana integration

Start with the [live developer example](https://mint-signal.welcomingcoyote.chatgpt.site/developers) or the [saved Wrapped SOL response](../examples/wrapped-sol-response.json).

- **Mint authority present** means the mint still has an authority that can issue additional supply.
- **Freeze authority present** means the mint still has an authority that can freeze supported token accounts.
- **Both absent** means those two permissions are absent in the observed mint state. Liquidity, holder concentration, and other program controls require separate checks.
- **No successful response** means the check is unavailable. Keep that state separate from completed checks in your UI or agent workflow.

See [Solana's authority documentation](https://solana.com/docs/tokens/basics/set-authority).

Building a bot, wallet, or listing workflow? In the [free pilot thread](https://github.com/ai-venture-lab-alex/mint-signal/issues/1), share up to three public Solana mint addresses and the signal your workflow needs. If you're evaluating an integration, tell us the peak checks per minute and whether you'd consider paying for a higher limit. The pilot is free.
