const mongoose = require("mongoose");
const Todo = mongoose.model("Todo");


//untuk menghandle request get all (index)
const index = (req, res, next) => {
    Todo.find({}, { __v: 0 })
      .then((todos) => {
        //sesuaikan response dengan soal
        const responseMessage = {
            code: 200,
            message: "Pesan Sukses",
            data: todos
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        //sesuaikan response dengan soal
        const responseMessage = {
            code: 400,
            message: "Pesan Gagal"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert 
const insert = (req, res, next) => {
    //sesuaikan request dengan soal
    const todo = new Todo({
        text: req.body.text,
    });
    todo
        .save()
        .then((result) => {
            //sesuaikan response dengan soal
            const responseMessage = {
                code: 200,
                message: "Pesan Sukses",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            //sesuaikan response dengan soal
            const responseMessage = {
                code: 400,
                message: "Pesan Gagal"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = {
    index, insert
}