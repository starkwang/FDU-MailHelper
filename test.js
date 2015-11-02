var nodemailer = require("nodemailer");
var user = 'wjwang13@fudan.edu.cn',
    pass = '310618';
var smtpTransport = nodemailer.createTransport({
    host: "mail.fudan.edu.cn",
    auth: {
        user: user,
        pass: pass
    }
});
smtpTransport.sendMail({
    from: '辅导员<' + user + '>',
    to: '<13307130321@fudan.edu.cn>',
    subject: '通知：今天KTV唱歌团建改地点啦！',
    html: '<html><head>    <title></title>    <meta http-equiv="Content-Type" content="text/html">    <link href="/coremail/XT3/assets/70572/css/readmail.css" rel="stylesheet" type="text/css" charset="iso-8859-1"></head><body><div style="text-align: center;"><br></div><div style="text-align: center;"><img src="http://mail.fudan.edu.cn/coremail/s?func=mbox:getMessageData&amp;sid=BAYDWGeezLFoKzCUtpeerXOVOtRONEVG&amp;mid=1:1tbiAQQSC1Kpyte3zgABsC&amp;part=3"><br></div><div style="text-align: center;"><br></div><div style="text-align: center;"><br></div><div style="text-align: center;"><br></div><div style="text-align: center;"><font size="5"><a href="http://t.cn/RUVgq21 " target="_blank">点击查看文章《因为音乐，这个复旦生辞职了》</a></font></div><div style="text-align: center;"><br></div><div style="text-align: center;"><font size="5"><a href="http://t.cn/RUVgc8P  " target="_blank">点击查看具体参赛规则：情歌王</a></font></div><div style="text-align: center;"><br></div><div style="text-align: center;"><font size="5"><a href="http://t.cn/RUVgtyA  " target="_blank">阅读十年后优秀文章：快戳我！</a></font></div><br><br><div style="text-align: center;"><span style="line-height: 1.2;">（辅导员是万圣节小玩笑，么么哒～祝大家万圣节快乐！）</span></div><br><br><br><br><br><br><br><br><br><br><br><br><br></body></html>'
}, function(error, result) {
    console.log(error,result);
});


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
    from: '辅导员<' + user + '>',
    to: '<13307130321@fudan.edu.cn>',
    subject: '通知：今天KTV唱歌团建改地点啦！',
    html: '<html><head>    <title></title>    <meta http-equiv="Content-Type" content="text/html">    <link href="/coremail/XT3/assets/70572/css/readmail.css" rel="stylesheet" type="text/css" charset="iso-8859-1"></head><body><div style="text-align: center;"><br></div><div style="text-align: center;"><img src="http://mail.fudan.edu.cn/coremail/s?func=mbox:getMessageData&amp;sid=BAYDWGeezLFoKzCUtpeerXOVOtRONEVG&amp;mid=1:1tbiAQQSC1Kpyte3zgABsC&amp;part=3"><br></div><div style="text-align: center;"><br></div><div style="text-align: center;"><br></div><div style="text-align: center;"><br></div><div style="text-align: center;"><font size="5"><a href="http://t.cn/RUVgq21 " target="_blank">点击查看文章《因为音乐，这个复旦生辞职了》</a></font></div><div style="text-align: center;"><br></div><div style="text-align: center;"><font size="5"><a href="http://t.cn/RUVgc8P  " target="_blank">点击查看具体参赛规则：情歌王</a></font></div><div style="text-align: center;"><br></div><div style="text-align: center;"><font size="5"><a href="http://t.cn/RUVgtyA  " target="_blank">阅读十年后优秀文章：快戳我！</a></font></div><br><br><div style="text-align: center;"><span style="line-height: 1.2;">（辅导员是万圣节小玩笑，么么哒～祝大家万圣节快乐！）</span></div><br><br><br><br><br><br><br><br><br><br><br><br><br></body></html>'
}, function(error, result) {
    console.log(error,result);
});
