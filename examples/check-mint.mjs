const mint = process.argv[2];
if (!mint || !/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) {
  console.error('Usage: node examples/check-mint.mjs SOLANA_MINT');
  process.exit(2);
}
const base = 'https://mint-signal.welcomingcoyote.chatgpt.site';
try {
  const request = () => fetch(base + '/v1/preview/' + mint, {signal:AbortSignal.timeout(12000)});
  let response = await request();
  const retryAfter = Number(response.headers.get('retry-after'));
  if (response.status === 503 && Number.isInteger(retryAfter) && retryAfter >= 1 && retryAfter <= 5) {
    await response.body?.cancel();
    await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
    response = await request();
  }
  const report = await response.json();
  if (!response.ok) {
    console.error(JSON.stringify({status:response.status,error:report.error,
      retryAfter:response.headers.get('retry-after')}));
    process.exitCode = 1;
  } else {
    console.log(JSON.stringify({mint:report.mint,slot:report.slot,flags:report.flags,
      unknown:Object.entries(report.checks).filter(([,check])=>check.status==='unknown').map(([name])=>name),
      verdict:report.verdict}));
  }
} catch (error) {
  console.error(JSON.stringify({error:'request_failed', detail:error.message}));
  process.exitCode = 1;
}
