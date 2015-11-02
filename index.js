var nodemailer = require("nodemailer");
var user = '13307130321@fudan.edu.cn',
    pass = '310618';
var smtpTransport = nodemailer.createTransport({
    host: "mail.fudan.edu.cn",
    auth: {
        user: user,
        pass: pass
    }
});

smtpTransport.sendMail({
    from: 'Stark<' + user + '>',
    to: '<13307130321@fudan.edu.cn>',
    subject: 'Node.JS通过SMTP协议从QQ邮箱发送邮件',
    html: '这是一封测试邮件 <br> '
}, function(err, res) {
    console.log(err, res);
});
