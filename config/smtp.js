require('dotenv').config();


module.exports = {
    host: "smtp.gmail.com",
    port: 587,
    user: process.env.EMAIL_DE_TESTE,
    pass: process.env.PASSWORD_DO_EMAIL
}