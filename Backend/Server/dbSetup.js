const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./Server/database.db",
    sqlite3.OPEN_READWRITE, (err) => {

        if (err) {
            return console.error(err.message);
        } else {
            console.log("Connection successful!");
        }
    })

//db.run("CREATE TABLE Question(QuestionId INTEGER PRIMARY KEY, Qtext TEXT NOT NULL)")

//db.run("CREATE TABLE Department(DepId INTEGER PRIMARY KEY AUTOINCREMENT, DepName TEXT NOT NULL)")

//db.run("CREATE TABLE Admin(AdminId INTEGER PRIMARY KEY AUTOINCREMENT, DepId INTEGER, FOREIGN KEY(DepId) REFERENCES Department(DepId) )")

// db.run("CREATE TABLE Users(UserId INTEGER PRIMARY KEY AUTOINCREMENT, DepId INTEGER, Score INTEGER, FOREIGN KEY(DepId) REFERENCES Department(DepId) )")

//db.run("CREATE TABLE Answers(AnswerId INTEGER PRIMARY KEY AUTOINCREMENT, UserId INTEGER, QuestionId INTEGER, AValue INTEGER, FOREIGN KEY (QuestionId) REFERENCES Question(QuestionId), FOREIGN KEY (UserId) REFERENCES Users(UserId) )")

//db.run("CREATE TABLE EmailLog(EId INTEGER PRIMARY KEY AUTOINCREMENT, Email STRING NOT NULL, LoginDate DATE NOT NULL)")

//db.run("DROP TABLE Answers")
//db.run("DROP TABLE Question")
// db.run("DROP TABLE Users")



//db.run("INSERT INTO Question(QId,Qtext)VALUES (1,'Question 1')")
//db.run("INSERT INTO Question(QId,Qtext)VALUES (2,'Question 2')")

//db.run("INSERT INTO Department(DepId, DepName)VALUES (1,'Orthoptics')")
//db.run("INSERT INTO Admin(DepId, Password)VALUES (1,'password123')")
// db.run("INSERT INTO Users(DepId, Score)VALUES (1,70)")
// db.run("INSERT INTO Users(DepId, Score)VALUES (1,30)")
// db.run("INSERT INTO Users(DepId, Score)VALUES (1,12)")
// db.run("INSERT INTO Users(DepId, Score)VALUES (1,25)")

db.close((err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log("DB Closed");
    }
});