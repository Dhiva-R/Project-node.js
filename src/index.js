import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-project-0-fdonx", // ~REPLACE~ with the Base URL from your Embed Dashboard dialog.
 });
 const chart = sdk.createChart({
    dashboardId: "6361d68d-680d-4eee-88c3-9be133528094", // ~REPLACE~ with the Dashboard ID from your Embed Dashboard dialog.
    height: "700px",
    widthMode: "scale",
    heightMode: "fixed",
    theme : "dark",
    // Additional options go here
 });
 dashboard.render(document.getElementById("dashboard"));