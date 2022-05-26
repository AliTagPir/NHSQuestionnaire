const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./Server/database.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log("Connection successful!");
    }
})

function genSum (req, res, next) {
    let answersSql = "SELECT UserId, SUM(AValue) FROM Answers GROUP BY UserId"
    db.all(answersSql, (err, rows) => {
        if (err) {
            console.error(err)
            return res.sendStatus(500)
        }
        req.sumData = rows
        next()
    })
}

function categoriseSummary (req, res, next) {
    const sumData = req.sumData
    sumData.forEach(row => {
        const score = row['SUM(AValue)']
        if (0 <= score && score <= 29) { row.description = 'Very poor' }
        if (30 <= score && score <= 49) { row.description = 'Poor' }
        if (50 <= score && score <= 79) { row.description = 'Good' }
        if (80 <= score && score <= 100) { row.description = 'Very good' }
    })
    next()
}

module.exports = { genSum, categoriseSummary }