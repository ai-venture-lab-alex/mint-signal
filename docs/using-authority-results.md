# Using Mint Signal in a Solana integration

Start with the [live developer example](https://mint-signal.welcomingcoyote.chatgpt.site/developers) or the [saved Wrapped SOL response](../examples/wrapped-sol-response.json).

- **Mint authority present** means the mint still has an authority that can issue additional supply.
- **Freeze authority present** means the mint still has an authority that can freeze supported token accounts.
- **Current freeze status of a holder account** requires checking that specific token account. The mint-level response only observes whether the mint has a freeze authority.
- **Both absent** means those two permissions are absent in the observed mint state. Liquidity, holder concentration, and other program controls require separate checks.
- **No successful response** means the check is unavailable. Keep that state separate from completed checks in your UI or agent workflow.

See [Solana's authority documentation](https://solana.com/docs/tokens/basics/set-authority).

## Example: active authority flags

A [live request for the Solana USDC mint](https://mint-signal.welcomingcoyote.chatgpt.site/v1/preview/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) returned `mint_authority_active` and `freeze_authority_active` at finalized slot 472098413. The API returned `undetermined`. These flags describe permissions. Use them to decide when your workflow needs further review and preserve the slot with the result.

Building a bot, wallet, or listing workflow? In the [free pilot thread](https://github.com/ai-venture-lab-alex/mint-signal/issues/1), share up to three public Solana mint addresses and the signal your workflow needs. If you're evaluating an integration, tell us the peak checks per minute and whether you'd consider paying for a higher limit. The pilot is free.

## Using the check in an agent

The [OpenAPI document](https://mint-signal.welcomingcoyote.chatgpt.site/openapi.json) describes one read-only operation, `checkSolanaMint`. Pass a public Solana mint address and return the observed slot, authority flags, and unknown checks to the user. If the request fails, report that the check is unavailable. The preview requires no wallet or API key.

For the free pilot, share the agent's use case and expected peak requests per minute in the [pilot thread](https://github.com/ai-venture-lab-alex/mint-signal/issues/1). Tell us which result would need to change the agent's review workflow.

## Temporary upstream errors

The preview can return HTTP 503 with `rpc_unavailable` and a `Retry-After` header. Keep the check unavailable in your workflow. If you retry, honor the header and bound the number of attempts. The [free pilot thread](https://github.com/ai-venture-lab-alex/mint-signal/issues/1) accepts reports with a public mint, the time, and the HTTP status.
