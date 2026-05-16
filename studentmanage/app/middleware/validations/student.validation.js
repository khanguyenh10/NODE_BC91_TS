const checkEmpty = (req, res, next) => {
    const { fullname, age, grade } = req.body;
    if (fullname && age && grade) {
        next();
    } else {
        res.status(500).send({ message: 'Các trường không được để trống fullName, age, grade' });
    }
}
const checkGrade = (req, res, next) => {
    const { grade } = req.body;
    if (grade >= 1 && grade <= 12) {
        next();
    } else {
        res.status(500).send({ message: 'Grade phải nằm trong khoảng từ 1 đến 12' });
    }
}
module.exports = {
    checkEmpty,
    checkGrade
}