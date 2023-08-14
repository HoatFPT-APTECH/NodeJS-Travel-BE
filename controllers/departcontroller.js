var db = require("../db/db");
var list = (req, res) => {
    var list = `SELECT * FROM department`;
    db.all(list, (err, rows) => {
        if (err) {
        res.status(400).json({message: err.message});
        } else {
            res.json({ message: 'Success', data: rows });
        }
    })
}

var detail = (res, req) => {
    var detail = ` SELECT * FROM department WHERE id= ?`;
    var id = req.params.id;

    db.get(detail,[id],(err,row)=>{
        if(err) {
            throw err;
        }else {
            res.json({message:'Success',data: row});
        }
    })

}

var add = (res, req) => {
  res.send("add")
}
var edit = (res, req) => {
    res.send("edit")
}
var del = (res, req) => {

}
module.exports = { list, detail, add, edit, del };