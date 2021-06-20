const mysql = require("mysql");

conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "icgoadvvjy",
  database: "proyectotscu",
});

let userModel = {};

userModel.getUsers = (callback) => {
  if (conn) {
    conn.query("SELECT * FROM users", (err, res) => {
      if (err) {
        throw err;
      }
      callback(null, res);
    });
  }
};

userModel.insertUser = (userdata, callback) => {
  if (conn) {
    conn.query("INSERT INTO users SET ?", userdata, (err, res) => {
      if (err) {
        throw err;
      }
      callback(null, {
        insertID: res.insertID,
      });
    });
  }
};

userModel.updateUser = (userdata, callback) => {
  if (conn) {
    const sql = `
        UPDATE users SET
        username = ${conn.escape(userdata.username)},
        email = ${conn.escape(userdata.email)},
        password = ${conn.escape(userdata.password)}
        WHERE userid = ${conn.escape(userdata.userid)} 
        `;
    conn.query(sql, (err, result) => {
      if (err) {
        throw err;
      } else {
        callback(null, {
          msg: "update sucess",
        });
      }
    });
  }
};

userModel.deleteUser = (userdata, callback) => {
  if (conn) {
    conn.query(
      "DELETE FROM users WHERE userid = ?",
      userdata.userid,
      (err, res) => {
        if (err) throw err;
        else {
          callback(null, {
            msg: "delete sucess",
          });
        }
      }
    );
  }
};

module.exports = userModel;
