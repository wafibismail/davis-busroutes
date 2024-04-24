// A very simple web socket client
function getClientHtml(domain) {
  return `<html>
    <body>
      <iframe src="app_assets/pages/pva_time_day.html" title="PVA - Time vs Day"></iframe>
    </body>
  </html>`;
}

// A simple Web server
Deno.serve((request: Request) => {
  const url = new URL(request.url);
  const body = new TextEncoder().encode(getClientHtml(url.host));
  return new Response(body);
});
