const { User, sequelize } = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
    const { name, email, address, type, phone, password } = req.body;
    const getAvatar = async (email) => {
        const { default: gravatarUrl } = await import("gravatar-url");

        return gravatarUrl(email);
    }
    try {
        //tạo avatar mặc định
        const avatarUrl = await getAvatar('kha@gmail.com');
        //tạo ra 1 chuỗi ngẫu nhiên
        const salt = bcrypt.genSaltSync(10);
        // mã hóa salt + password
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ name, email, phone, address, type, phone, password: hashPassword, avatar: avatarUrl });
        return res.status(201).send(newUser);
    } catch (error) {
        console.log(error);
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
const uploadAvatar = async (req, res) => {
    const { file } = req;
    const urlImage = `http://localhost:3000/${file.path}`;
    const { user } = req;
    const userFound = await User.findOne({ where: { email: user.email } });
    userFound.avatar = urlImage;
    await userFound.save();
    res.send(userFound);
}
const getAllTrip = async (req, res) => {
    try {
        const [results] = await sequelize.query(`
        SELECT users.name as userName, fromSta.name as fromStation, toSta.name as toStation from users
        INNER JOIN tickets on users.id = tickets.userId
        INNER JOIN trips on trips.id = tickets.tripId
        INNER JOIN stations as fromSta on fromSta.id = trips.fromStation
        INNER JOIN stations as toSta on toSta.id = trips.toStation
    `);
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send(error);
    }

}
module.exports = {
    register,
    login,
    uploadAvatar,
    getAllTrip
}