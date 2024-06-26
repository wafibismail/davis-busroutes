function getClientHtml(domain) {
  return `<html>
    <head><title>Dashboard</title></head>
    <body>
      <div style="display: flex;" id="controls" height="10%" width="100%">
        <button style="flex: 1;" onclick="ws.send(0)">Mean Move Durations (by path)</button>
        <button style="flex: 1;" onclick="ws.send(1)">Box Plot of Move Durations (by path)</button>
        <button style="flex: 1;" onclick="ws.send(2)">Idle Durations</button>
        <button style="flex: 1;" onclick="ws.send(3)">Move Durations</button>
        <button style="flex: 1;" onclick="ws.send(4)">Time (Discritized)</button>
        <button style="flex: 1;" onclick="ws.send(5)">Time (Undiscritized)</button>
        <button style="flex: 1;" onclick="ws.send(6)">Surface (Path/Time)</button>
        <button style="flex: 1;" onclick="ws.send(7)">Surface (Path/Day)</button>
        <button style="flex: 1;" onclick="ws.send(8)">Surface (Time/Day)</button>
        <button style="flex: 1;" onclick="ws.send(9)">Evaluation (DT)</button>
        <button style="flex: 1;" onclick="ws.send(10)">Evaluation (RF)</button>
        <button style="flex: 1;" onclick="ws.send(11)">Evaluation (KNN)</button>
        <button style="flex: 1;" onclick="ws.send(12)">Evaluation (ANN)</button>
      </div>
      <div id="the_output" height="90%" width="100%">
        <iframe id="the_iframe" height="92.5%" width="100%" title="Dashboard"></iframe>
      </div>
      <script>
        const ws = new WebSocket("wss://${domain}/");
        const output = document.querySelector("#the_output");
        const write = (msg) => {
          output.innerHTML = '<iframe id="the_iframe" height="92.5%" width="100%" title="Dashboard"></iframe>';
          document.querySelector("#the_iframe").contentWindow.document.write(msg);
        }
        ws.onmessage = (e) => write(e.data);
      </script>
      <div onload="ws.send(0)" hidden=true></div>
    </body>
  </html>`;
}

const means = await Deno.readTextFile("./app_assets/means");
const boxplot = await Deno.readTextFile("./app_assets/boxplot");
const idle_durations = await Deno.readTextFile("./app_assets/idle_durations");
const move_durations = await Deno.readTextFile("./app_assets/move_durations");
const time_discretized = await Deno.readTextFile("./app_assets/time_discretized");
const time_undiscretized = await Deno.readTextFile("./app_assets/time_undiscretized");
const pva_path_time = await Deno.readTextFile("./app_assets/pva_path_time");
const pva_path_day = await Deno.readTextFile("./app_assets/pva_path_day");
const pva_time_day= await Deno.readTextFile("./app_assets/pva_time_day");
const DecisionTreeRegressor_prediction = await Deno.readTextFile("./app_assets/DecisionTreeRegressor_prediction");
const RandomForestRegressor_prediction = await Deno.readTextFile("./app_assets/RandomForestRegressor_prediction");
const KNearestNeighborsRegressor_prediction = await Deno.readTextFile("./app_assets/KNearestNeighborsRegressor_prediction");
const ANNPredictiveModel_prediction = await Deno.readTextFile("./app_assets/ANNPredictiveModel_prediction");

Deno.serve((request: Request) => {
  if (request.headers.get("upgrade") === "websocket") {
    // Upgrade to a web socket response if requested
    const { socket, response } = Deno.upgradeWebSocket(request);

    // Listen for incoming messages
    socket.onmessage = (_e) => {
      if (_e.data==0) socket.send(means);
      else if (_e.data==1) socket.send(boxplot);
      else if (_e.data==2) socket.send(idle_durations);
      else if (_e.data==3) socket.send(move_durations);
      else if (_e.data==4) socket.send(time_discretized);
      else if (_e.data==5) socket.send(time_undiscretized);
      else if (_e.data==6) socket.send(pva_path_time);
      else if (_e.data==7) socket.send(pva_path_day);
      else if (_e.data==8) socket.send(pva_time_day);
      else if (_e.data==9) socket.send(DecisionTreeRegressor_prediction);
      else if (_e.data==10) socket.send(RandomForestRegressor_prediction);
      else if (_e.data==11) socket.send(KNearestNeighborsRegressor_prediction);
      else if (_e.data==12) socket.send(ANNPredictiveModel_prediction);
      else socket.send("Invalid code");
    };

    return response;
  } else {
    // Normal HTTP requests receive the client HTML
    const url = new URL(request.url);
    const body = new TextEncoder().encode(getClientHtml(url.host));
    return new Response(body);
  }
});
