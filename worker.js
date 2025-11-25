export default {
  async scheduled(event, env, ctx) {
    const url = "要访问的链接";// 要监控的 URL
    const resp = await fetch(url, {
      method: "GET",
      headers: { "User-Agent": "CF-Cron/1.0" }
    });
    console.log(`${new Date().toISOString()} ${url} ${resp.status}`);
  }
};
