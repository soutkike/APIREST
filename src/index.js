const express = require("express");
const app = express();
const puerto = process.env.PORT || 3001;
app.set("port", puerto);

app.use(express.json());

require("./routes/sensorRoutes")(app);

app.listen(app.get("port"), () => {
  console.log("server on port " + puerto);
});
