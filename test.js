
var user = '13307130321@fudan.edu.cn',
    pass = '***';
var smtpTransport = nodemailer.createTransport({
    host: "mail.fudan.edu.cn",
    auth: {
        user: user,
        pass: pass
    }
});
smtpTransport.sendMail({
    from: '***<' + user + '>',
    to: '<13307130321@fudan.edu.cn>',
    subject: 'title',
    html: '<p>content</p>'
}, function(error, result) {
    console.log(error,result);
});
