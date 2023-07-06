const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

// let sql = ` CREAT TABLE Users(
//     col1 Datatype PRIMARY KEY,
//     col2 Datatype,
//     col3 Datatype
// );
// `

// let sql = `CREATE TABLE IF NOT EXISTS Users (
//     ID TEXT PRIMARY KEY,
//     Username TEXT,
//     Emali TEXT,
//     DOB TEXT
// )
// `

let a = `
SELECT name, type FROM pragma_table_info("Users")
`
let b = `
ALTER TABLE Users
RENAME COLUMN Email TO Emali;`

let c =`INSERT INTO Users(ID,Username,Emali,DOB)
VALUES("13581","Bob","bob@checkServerIdentity.com","2005-10-28")`

let d =`SELECT * FROM Users`;

let e =`SELECT ID FROM Users
WHERE Username = "Bob";`

let f =`UPDATE Users
SET EMALI = "jake@gmail.com"
WHERE id = "13581";`

let g =`DELETE FROM Users
WHERE ID = "13581"`

db.all(g, CallbackFunc);

//db.exec(sql,callbackFunc);
