const authorize = (arrType) => (req, res, next) => {
    const { user } = req;
    if (arrType.findIndex(ele => ele === user.type) > -1) {
        next();
    } else {
        res.status(403).send({ message: 'Bạn đã đăng nhập, nhưng ko có quyền' });
    }
}
module.exports = {
    authorize
}