const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./Server/database.db",
    sqlite3.OPEN_READWRITE, (err) => {

        if (err)

        {

            return console.error(err.message);

        } else {

            console.log("Connection successful!");

        }

    }
)

//db.run("CREATE TABLE Question(QId INTEGER PRIMARY KEY, Qtext TEXT NOT NULL)")
//db.run("CREATE TABLE Answers(AId INTEGER PRIMARY KEY AUTOINCREMENT, QuestionId INTEGER, Atext TEXT NOT NULL, FOREIGN KEY (QuestionId) REFERENCES Question(QId) )")

//db.run("INSERT INTO Question(QId,Qtext)VALUES (1,'Question 1')")
db.run("INSERT INTO Question(QId,Qtext)VALUES (2,'Question 2')")

db.close((err) =>

    {

        if (err)

        {

            return console.error(err.message);

        } else {

            console.log("DB Closed");

        }

    }
);