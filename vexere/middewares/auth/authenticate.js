const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.header("token");
        const decode = jwt.verify(token, "kha-257-@");
        if (decode) {
            req.user = decode;
            next();
        } else {
            res.status(401).send({ message: 'Bạn Chưa Đăng Nhập' })
        }
    } catch (error) {
        res.status(401).send({ message: 'Bạn Chưa Đăng Nhập' })
    }
}

module.exports = {
    authenticate,
}