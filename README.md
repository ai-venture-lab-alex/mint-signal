# Mint Signal

A free pilot API for Solana bot and wallet developers. It reports finalized on-chain observations about who can mint a token or freeze its token accounts.

**[Request a free mint check](https://github.com/ai-venture-lab-alex/mint-signal/issues/1)** with one public mint address and a sentence about your bot, wallet, or monitoring workflow.

- [Try a live Wrapped SOL request](https://mint-signal.welcomingcoyote.chatgpt.site/v1/preview/So11111111111111111111111111111111111111112)
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

Replace the final path segment with your public mint address. The JSON includes the finalized slot, authority flags, and checks with unknown results.

For a free check of up to three public Solana mint addresses, use the [pilot feedback thread](https://github.com/ai-venture-lab-alex/mint-signal/issues/1) with the mint addresses and your use case. For API integration feedback, include your peak requests per minute and the signal you need. Keep secrets and customer data out of public issues.
