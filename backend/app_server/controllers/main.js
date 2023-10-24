const index = (req, res, next) => {
    res.render('index', { title: 'Backend Exam', message: 'Selamat Mengerjakan, Semoga Sukses!' });
};

module.exports = {
    index, 
}
