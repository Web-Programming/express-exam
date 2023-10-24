let mongoose = require("mongoose");
//Lakukan konfidurasi database -- lihat soal
let dbURI = "mongodb://127.0.0.1:27017/nama_database_sesuai_soal"

mongoose.connect(dbURI, {
    useNewUrlParser: true
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error) => {
    console.log("Connection Error : " + error);
});
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

//memanggil model -- lihat soal
//require("./xxx");