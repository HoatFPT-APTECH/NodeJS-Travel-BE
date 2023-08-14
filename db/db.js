var sqlite3 = require('sqlite3').verbose();
var dbName = './depart.db';
var db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.log("Connect failed");
        throw err;
    }
    else {
        var tbl = `CREATE TABLE IF NOT EXISTS department   (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            code TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL,
            totalmem INTEGER 
        )`;
        db.run(tbl, (err) => {
            if (err) {
                console.log("Create table failed.");
                throw err;
            }
            // else {
            //   var ins= `INSERT INTO department(code,name,totalmem) VALUES (?,?,?)`;
            //   db.run(ins,["SAMSUNG1","SAMSUNG2",3000],(err)=>{
            //     if (err) throw err;
            //   })
            //   db.run(ins,['APP','Apple',100000],(err)=>{
            //     if (err) throw err;
            //   })
            // }
        })
    }
})
module.exports=db;