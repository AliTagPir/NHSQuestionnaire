/* ------------------------------API Set Up------------------------------ */
const express = require('express');
const sqlite3 = require("sqlite3");
const { genSum, categoriseSummary } = require('./utils/genSum.js')

const db = new sqlite3.Database("./Server/database.db",
    sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        } else {
            console.log("Connection successful!");
        }
    })
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

app.get("/questions", (request, response) => {
    // let rest = []
    const selectSql = "SELECT * FROM Question";
    db.all(selectSql, (err, rows) => {
        if (err) {
            return console.error(err.message);
        } else {
            response.send(rows)
        }
    });
})

app.post("/answers", (request,response) => {
    const userId = request.body.userId
    const questionId = request.body.questionId
    const answerVal = request.body.answerVal
    db.run(`INSERT INTO Answers (UserId, QuestionId, AValue )VALUES ('${userId}','${questionId}', '${answerVal}')`)
    console.log(`Answer pushed to DB`)
    response.sendStatus(201); //201 is a status of creating
})

app.get("/users/summary", genSum, categoriseSummary, (req,res) => {
    res.status(200).send({ sumData: req.sumData })
})
