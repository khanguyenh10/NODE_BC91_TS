
const logFeature = (req, res, next) => {
    console.log('đây là tính năng lấy danh sách sinh viên');
    next();
};

module.exports = {
    logFeature
};