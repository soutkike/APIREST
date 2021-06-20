const mysql = require("mysql");

con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "icgoadvvjy",
  database: "proyectotscu",
});

let sensorModel = {};

sensorModel.getAll = (cb) => {
  if (con) {
    console.log("solicitud get");
    con.query("SELECT id,time,type FROM sensor;", (err, data) => {
      if (err) {
        throw err;
      }
      cb(null, data);
    });
  }
};

sensorModel.getEntries = (cb) => {
  if (con) {
    console.log("solicitud get");
    con.query(
      "SELECT id,time FROM sensor WHERE type = 'entry';",
      (err, data) => {
        if (err) {
          throw err;
        }
        cb(null, data);
      }
    );
  }
};

sensorModel.getRecentEntries = (cb) => {
  if (con) {
    con.query(
      "SELECT id,time FROM sensor WHERE type = 'entry' AND TIME >= DATE_SUB(NOW(),INTERVAL 1 HOUR);",
      (err, data) => {
        if (err) {
          throw err;
        }
        cb(null, data);
      }
    );
  }
};

sensorModel.getRecent = (cb) => {
  if (con) {
    con.query(
      "SELECT * FROM sensor WHERE  TIME >= DATE_SUB(NOW(),INTERVAL 1 HOUR);",
      (err, data) => {
        if (err) {
          throw err;
        }
        cb(null, data);
      }
    );
  }
};

sensorModel.getExits = (cb) => {
  if (con) {
    con.query(
      "SELECT id,time FROM sensor WHERE type = 'exit';",
      (err, data) => {
        if (err) {
          throw err;
        }
        cb(null, data);
      }
    );
  }
};

sensorModel.getRecentExits = (cb) => {
  if (con) {
    con.query(
      "SELECT id,time FROM sensor WHERE type = 'exit' AND TIME >= DATE_SUB(NOW(),INTERVAL 1 HOUR);",
      (err, data) => {
        if (err) {
          throw err;
        }
        cb(null, data);
      }
    );
  }
};

sensorModel.newRead = (data, callback) => {
  if (con) {
    con.query("INSERT INTO sensor SET ?", data, (err, res) => {
      if (err) throw err;
      callback(null, {
        sucess: "true",
      });
    });
  }
};

module.exports = sensorModel;
