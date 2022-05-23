const express = require('express');
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("database.db",
    sqlite3.OPEN_READWRITE, (err) => {

        if (err)

        {

            return console.error(err.message);

        } else {

            console.log("Connection successful!");

        }

    }
)
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.use(express.static('DOM'));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

app.post("")
