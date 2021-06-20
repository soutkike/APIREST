const sensor = require("../models/sensor");
const userRoutes = require("./userRoutes");

const sensorRoutes = (app) => {
  app.get("/getAll", (req, res) => {
    sensor.getAll((err, data) => {
      let entries = 0;
      let exits = 0;
      data.forEach((reg) => {
        reg.type == "entry" ? entries++ : exits++;
      });
      res.json({
        state: "sucessfull",
        count: data.length,
        entries: entries,
        exits: exits,
        data,
      });
    });
  });

  app.get("/getRecent", (req, res) => {
    sensor.getRecent((err, data) => {
      let entries = 0;
      let exits = 0;
      data.forEach((reg) => {
        reg.type == "entry" ? entries++ : exits++;
      });
      res.json({
        state: "sucessfull",
        count: data.length,
        entries: entries,
        exits: exits,
        data,
      });
    });
  });

  app.get("/getEntries", (req, res) => {
    sensor.getEntries((err, data) => {
      res.json({
        state: "sucessfull",
        count: data.length,
        data,
      });
    });
  });

  app.get("/getRecentEntries", (req, res) => {
    console.log("solicitud get");
    sensor.getRecentEntries((err, data) => {
      res.json({
        state: "sucessfull",
        count: data.length,
        data,
      });
    });
  });

  app.get("/getExits", (req, res) => {
    sensor.getExits((err, data) => {
      res.json({
        state: "sucessfull",
        count: data.length,
        data,
      });
    });
  });

  app.get("/getRecentExits", (req, res) => {
    sensor.getRecentExits((err, data) => {
      res.json({
        state: "sucessfull",
        count: data.length,
        data,
      });
    });
  });

  app.post("/new", (req, res) => {
    const someData = {
      id: null,
      type: req.body.type,
      time: new Date(),
      location: req.body.location,
    };
    sensor.newRead(someData, (err, data) => {
      if (err) throw err;
      if (data) {
        res.json({
          sucess: "true",
          mensaje: "insertado",
        });
      }
    });
  });
};

module.exports = sensorRoutes;
