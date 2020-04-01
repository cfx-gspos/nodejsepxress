var express = require('express');
var app = express();


// 自定义跨域中间件
var allowCors = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
app.use(allowCors);//使用跨域中间件

app.get('/', function (req, res) {

    res.send('this is homepage');

});

app.post('/doLogin', function (req, res) {
    console.log(req.body);
    res.json({ 'msg': 'post ok this is frank   jinwanjun' });
});
app.listen(3000);