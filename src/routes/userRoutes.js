const e = require("express");
const user = require("../models/user");

function userRoutes(app) {
  app.get("/users", (req, res) => {
    user.getUsers((err, data) => {
      res.json(data);
    });
  });

  app.post("/users", (req, res) => {
    console.log(req.body);
    const userData = {
      userid: null,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      create_time: null,
    };

    user.insertUser(userData, (err, data) => {
      if (err) {
        throw err;
      }

      if (data) {
        res.json({
          sucess: "true",
          mensaje: "usuario insertado",
        });
      }
    });
  });

  app.put("/users/:id", (req, res) => {
    const userData = {
      userid: req.params.id,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      create_time: null,
    };

    user.updateUser(userData, (err, data) => {
      if (err) throw err;
      else if (data) {
        res.json(data);
      } else {
        res.json({
          sucess: "false",
        });
      }
    });
  });

  app.delete("/users/:id", (req, res) => {
    const userData = {
      userid: req.params.id,
    };
    user.deleteUser(userData, (err, data) => {
      if (err) {
        throw err;
      } else if (data) {
        res.json({
          sucess: "resource deleted",
        });
      }
    });
  });
}

module.exports = userRoutes;
