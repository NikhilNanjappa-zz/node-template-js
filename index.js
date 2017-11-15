const app = require("express")();

const base_router = require("./api/routes/baseRouter");

app.use("/api/current", base_router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
})