// A very simple web socket client
function getClientHtml(domain) {
  return `<html>
    <body>
      <iframe title="PVA - Time vs Day"></iframe>
    </body>
  </html>`;
}
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

// A simple Web server
Deno.serve((request: Request) => {
  function getClientHtml(domain) {
    return pva_time_day;
  };
  const url = new URL(request.url);
  const body = new TextEncoder().encode(getClientHtml(url.host));
  return new Response(body);
});
