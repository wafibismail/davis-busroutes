// A very simple web socket client
/*
function getClientHtml(domain) {
  return `<html>
    <body>
      <iframe id="iframe1"title="PVA - Time vs Day"></iframe>
      <script>
        document.getElementById('iframe1').contentWindow.document.write("<html><body>Hello world</body></html>");
      </script>
    </body>
  </html>`;
}*/
const means = await Deno.readTextFile("./app_assets/pages/means.html");
const move_durations = await Deno.readTextFile("./app_assets/pages/idle_durations.html");
const time_discretized = await Deno.readTextFile("./app_assets/pages/time_discretized.html");
const time_undiscretized = await Deno.readTextFile("./app_assets/pages/time_undiscretized.html");
const pva_time_day= await Deno.readTextFile("./app_assets/pages/pva_time_day.html");
const pva_path_time = await Deno.readTextFile("./app_assets/pages/pva_path_time.html");
const pva_path_day = await Deno.readTextFile("./app_assets/pages/pva_path_day.html");
const RandomForestRegressor_prediction = await Deno.readTextFile("./app_assets/pages/RandomForestRegressor_prediction.html");
const KNearestNeighborsRegressor_prediction = await Deno.readTextFile("./app_assets/pages/KNearestNeighborsRegressor_prediction.html");
const DecisionTreeRegressor_prediction = await Deno.readTextFile("./app_assets/pages/DecisionTreeRegressor_prediction.html");
const ANNPredictiveModel_prediction = await Deno.readTextFile("./app_assets/pages/ANNPredictiveModel_prediction.html");

// A very simple web socket client
function getClientHtml(domain) {
  return `<html>
    <body>
      <div id="controls">
        <button id="loader"></button>
      </div>
      <div id="the_output">
        <iframe id="the_iframe" height="100%" width="100%" title="Dashboard"></iframe>
      </div>
      <script>
        const ws = new WebSocket("wss://${domain}/");
        const output = document.querySelector("#the_output");
        const loader = document.querySelector("#loader");
        const write = (msg) => {
          output.innerHTML = '<iframe id="the_iframe" height="100%" width="100%" title="Dashboard"></iframe>';
          let the_iframe = document.querySelector("#the_iframe");
          the_iframe.contentWindow.document.write(msg);
        }

        // Print a "pong" when the server responds
        ws.onmessage = (e) => write(e.data);

        // Ping the server every second
        loader.onclick = function(){ws.send("ping")};
      </script>
    </body>
  </html>`;
}

// A simple WebSocket server
Deno.serve((request: Request) => {
  if (request.headers.get("upgrade") === "websocket") {
    // Upgrade to a web socket response if requested
    const { socket, response } = Deno.upgradeWebSocket(request);

    // Listen for incoming messages
    socket.onmessage = (_e) => {
      console.log("ping");
      socket.send(pva_time_day);
    };

    return response;
  } else {
    // Normal HTTP requests receive the client HTML
    const url = new URL(request.url);
    const body = new TextEncoder().encode(getClientHtml(url.host));
    return new Response(body);
  }
});
