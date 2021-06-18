const express = require('express')
const nodemailer = require("nodemailer");

const router = express.Router();

const emailSend = async (data) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to: data.email,
        subject: "Hello ✔",
        text: data.message,
        html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

router.post("/", async (req, res) => {
    await emailSend(req.body);
    res.send(req.body);
});

module.exports = router;
