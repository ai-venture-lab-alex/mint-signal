# Mint Signal

A free pilot API for Solana bot and wallet developers. It reports finalized on-chain observations about who can mint a token or freeze its token accounts.

**[Request a free mint check](https://github.com/ai-venture-lab-alex/mint-signal/issues/1)** with one public mint address and the step in your bot, wallet, or monitoring workflow where you need the result.

If you're evaluating the API for a team, [share your expected daily volume and peak request rate](https://github.com/ai-venture-lab-alex/mint-signal/issues/new?template=pilot-capacity.yml). Would a higher limit be worth $5/month for that workload? The pilot is free and the $5 price is for research.

- [Try a live Wrapped SOL request](https://mint-signal.welcomingcoyote.chatgpt.site/v1/preview/So11111111111111111111111111111111111111112)
- [Inspect a saved JSON response](examples/wrapped-sol-response.json) to try parsing the API response offline.
- [Integration guide](https://mint-signal.welcomingcoyote.chatgpt.site/developers)
- [OpenAPI 3.1](https://mint-signal.welcomingcoyote.chatgpt.site/openapi.json)
- [Node.js quickstart](examples/check-mint.mjs)
- [How to interpret authority results](docs/using-authority-results.md)
- [n8n workflow JSON](examples/n8n-mint-check.json)
- [Postman collection](examples/mint-signal.postman_collection.json)
- [Request higher API capacity publicly](https://github.com/ai-venture-lab-alex/mint-signal/issues/new?template=pilot-capacity.yml)
- [Anonymous survey about API limits](https://mint-signal.welcomingcoyote.chatgpt.site/pilot)

The pilot requires no API key and allows ten requests per minute per IP per server instance. The report marks unavailable checks as unknown. Liquidity locks and sellability are unverified. Payments are disabled.

### Run a check from your terminal

```sh
curl -fsS --max-time 15 https://mint-signal.welcomingcoyote.chatgpt.site/v1/preview/So11111111111111111111111111111111111111112
```

If the live API returns HTTP 503, see [temporary upstream errors](docs/using-authority-results.md#temporary-upstream-errors) or use the saved response to test parsing.

Replace the final path segment with your public mint address. The JSON includes the finalized slot, authority flags, and checks with unknown results.

For a free check of up to three public Solana mint addresses, use the [pilot feedback thread](https://github.com/ai-venture-lab-alex/mint-signal/issues/1) with the mint addresses and your use case. For API integration feedback, include your peak requests per minute and the signal you need. Keep secrets and customer data out of public issues.

### Try the pilot in n8n

Download the [workflow JSON](examples/n8n-mint-check.json), import it into n8n, and run it manually. Replace the last URL segment in **Read token permissions** to check a different public Solana mint. The workflow was verified using n8n 2.48.7 with a temporary workflow ID for CLI execution. It reads the API and requires no credentials.

If you use this in a workflow, [tell us what it checks and your peak requests per minute](https://github.com/ai-venture-lab-alex/mint-signal/issues/1).
