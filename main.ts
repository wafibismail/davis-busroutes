// A very simple web socket client
function getClientHtml(domain) {
  return `<html>
    <body>
      <script>
        const ws = new WebSocket("wss://${domain}/");
      </script>
      <div style="display: flex;" id="controls" height="10%" width="100%">
        <button onload="ws.send(0)" style="flex: 1;" onclick="ws.send(0)">Mean Move Durations (by path)</button>
        <button style="flex: 1;" onclick="ws.send(1)">Idle Durations</button>
        <button style="flex: 1;" onclick="ws.send(2)">Move Durations</button>
        <button style="flex: 1;" onclick="ws.send(3)">Time (Discritized)</button>
        <button style="flex: 1;" onclick="ws.send(4)">Time (Undiscritized)</button>
        <button style="flex: 1;" onclick="ws.send(5)">Surface (Path/Time)</button>
        <button style="flex: 1;" onclick="ws.send(6)">Surface (Path/Day)</button>
        <button style="flex: 1;" onclick="ws.send(7)">Surface (Time/Day)</button>
        <button style="flex: 1;" onclick="ws.send(8)">Evaluation (DT)</button>
        <button style="flex: 1;" onclick="ws.send(9)">Evaluation (RF)</button>
        <button style="flex: 1;" onclick="ws.send(10)">Evaluation (KNN)</button>
        <button style="flex: 1;" onclick="ws.send(11)">Evaluation (ANN)</button>
      </div>
      <div id="the_output" height="90%" width="100%">
        <iframe id="the_iframe" height="92.5%" width="100%" title="Dashboard"></iframe>
      </div>
      <script>
        const output = document.querySelector("#the_output");
        const write = (msg) => {
          output.innerHTML = '<iframe id="the_iframe" height="92.5%" width="100%" title="Dashboard"></iframe>';
          document.querySelector("#the_iframe").contentWindow.document.write(msg);
        }
        ws.onmessage = (e) => write(e.data);
      </script>
    </body>
  </html>`;
}

const means = await Deno.readTextFile("./app_assets/pages/means.html");
const idle_durations = await Deno.readTextFile("./app_assets/pages/idle_durations.html");
const move_durations = await Deno.readTextFile("./app_assets/pages/move_durations.html");
const time_discretized = await Deno.readTextFile("./app_assets/pages/time_discretized.html");
const time_undiscretized = await Deno.readTextFile("./app_assets/pages/time_undiscretized.html");
const pva_path_time = await Deno.readTextFile("./app_assets/pages/pva_path_time.html");
const pva_path_day = await Deno.readTextFile("./app_assets/pages/pva_path_day.html");
const pva_time_day= await Deno.readTextFile("./app_assets/pages/pva_time_day.html");
const DecisionTreeRegressor_prediction = await Deno.readTextFile("./app_assets/pages/DecisionTreeRegressor_prediction.html");
const RandomForestRegressor_prediction = await Deno.readTextFile("./app_assets/pages/RandomForestRegressor_prediction.html");
const KNearestNeighborsRegressor_prediction = await Deno.readTextFile("./app_assets/pages/KNearestNeighborsRegressor_prediction.html");
const ANNPredictiveModel_prediction = await Deno.readTextFile("./app_assets/pages/ANNPredictiveModel_prediction.html");

// A simple WebSocket server
Deno.serve((request: Request) => {
  if (request.headers.get("upgrade") === "websocket") {
    // Upgrade to a web socket response if requested
    const { socket, response } = Deno.upgradeWebSocket(request);

    // Listen for incoming messages
    socket.onmessage = (_e) => {
      if (_e.data==0) socket.send(means);
      else if (_e.data==1) socket.send(idle_durations);
      else if (_e.data==2) socket.send(move_durations);
      else if (_e.data==3) socket.send(time_discretized);
      else if (_e.data==4) socket.send(time_undiscretized);
      else if (_e.data==5) socket.send(pva_path_time);
      else if (_e.data==6) socket.send(pva_path_day);
      else if (_e.data==7) socket.send(pva_time_day);
      else if (_e.data==8) socket.send(DecisionTreeRegressor_prediction);
      else if (_e.data==9) socket.send(RandomForestRegressor_prediction);
      else if (_e.data==10) socket.send(KNearestNeighborsRegressor_prediction);
      else if (_e.data==11) socket.send(ANNPredictiveModel_prediction);
      else socket.send("nah");
    };

    return response;
  } else {
    // Normal HTTP requests receive the client HTML
    const url = new URL(request.url);
    const body = new TextEncoder().encode(getClientHtml(url.host));
    return new Response(body);
  }
});
