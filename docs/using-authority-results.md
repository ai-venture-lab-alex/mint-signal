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

## Reviewing a stablecoin integration

An issuer may retain freeze authority as part of its operating policy. Show the observed authority and slot to the reviewer, who can compare them with the issuer's published policy. For Token-2022 mints, review extensions such as transfer hooks separately. See [Solana's exchange integration guide](https://solana.com/docs/defi/exchange).

If your team reviews Solana stablecoin mints, bring one public mint and the review step you want to automate to the [free pilot](https://github.com/ai-venture-lab-alex/mint-signal/issues/1). For a higher-limit API, optionally tell us your daily volume, peak requests per second, and whether $5/month would fit your budget. This is a pricing question. The pilot is free.

### USDT mint authority example

On 22 November 2026 at 12:57:38 UTC the [USDT mint preview](https://mint-signal.welcomingcoyote.chatgpt.site/v1/preview/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) reported `freeze_authority_active` at finalized slot `472549014`. For a current check, run the preview again and record the returned slot. To count freeze or thaw events, use a transaction history source separately. If you're validating an indexer, you can [request a free check of one public mint](https://github.com/ai-venture-lab-alex/mint-signal/issues/1) and share what you need to verify.

## Build a workflow with three outcomes

When testing with the [n8n example](../examples/n8n-mint-check.json), keep these outcomes distinct: an authority is present, the checked authority is absent, or the check is unavailable (for example, after HTTP 503). Include the observed slot in alerts based on a completed check. If you are evaluating this for a workflow, [bring one public mint to the free pilot](https://github.com/ai-venture-lab-alex/mint-signal/issues/1) and describe which outcome should trigger your alert.

## Combining mint authorities with pool data

Use the mint address for the authority check and keep its finalized slot with the result. Read liquidity and LP balances from the relevant pool separately, and keep the pool address and observation time with those values. A mint authority report can be evaluated on its own while pool data is unavailable. If you're prototyping this integration, [share one public mint and the fields your wallet or indexer needs](https://github.com/ai-venture-lab-alex/mint-signal/issues/1) for a free pilot.

## Wallet token onboarding

During token onboarding, keep the mint address, the source of any identity verification, and the observed mint and freeze authorities as separate fields. [Solana's guide to token verification](https://solana.com/docs/tokens/how-to-verify-a-token) describes how explorers resolve token identity. Mint Signal supplies the authority fields and a finalized slot for the mint you provide.

If you are prototyping an onboarding flow, [request a free check](https://github.com/ai-venture-lab-alex/mint-signal/issues/1) with one public mint and the field you would display. If you expect to check many mints, share the expected peak request rate and whether a higher API limit would be useful.

## Adding a filter to a token scanner

Use your existing token feed to discover mint addresses. For one filter, use the Mint Signal response to identify a present mint or freeze authority and keep its finalized slot with the result. If the request fails, mark the filter result as unavailable. [Request a free check of one public mint](https://github.com/ai-venture-lab-alex/mint-signal/issues/1) and tell us which field your scanner needs and the peak number of checks per minute.
