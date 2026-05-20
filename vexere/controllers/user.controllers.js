const { User } = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
    const { name, email, address, type, phone, password } = req.body;
    try {
        //tạo ra 1 chuỗi ngẫu nhiên
        const salt = bcrypt.genSaltSync(10);
        // mã hóa salt + password
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ name, email, phone, address, type, phone, password: hashPassword });
        return res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        //b1: tìm ra user đăng nhập dựa trên email
        const user = await User.findOne({ where: { email } });
        console.log("user", user)
        if (user) {
            //b2:kiểm tra mật khẩu có đúng hay ko
            const isAuth = await bcrypt.compare(password, user.password);
            if (isAuth) {
                const token = jwt.sign({ email: user.email, type: user.type }, "kha-257-@", { expiresIn: 60 * 10 }); // 2 phút
                return res.status(200).send({ message: 'Đăng nhập thành công', token });
            } else {
                return res.status(500).send({ message: 'Email và mật khẩu không đúng' })
            }
        } else {
            return res.status(400).send({ message: 'Không tìm thấy email phù hợp' })
        }

    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    register,
    login
}