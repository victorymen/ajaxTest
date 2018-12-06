var express = require('express');
var router = express.Router();
var redis = require('redis')
var client = redis.createClient(6379, '127.0.0.1')
client.on('error', function(err) {
  console.log('Error ' + err);
});
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/req_ajax', function(req, res, next) {
  /* req.query对象
     通常称为GET请求参数。
     包含以键值对存放的查询字符串参数
     req.query不需要任何中间件即可使用
  */
  var type = req.query.type;
  var info = req.query.info;
  client.get('amen', function(err, value) {
    if (err) throw err;
    console.log("服务器收到一个Ajax [" + type + "] 请求，信息为：" + value);
    res.json(['success', "服务器收到一个Ajax [" + type + "] 请求，信息为：" + value]);
  })
});
module.exports = router;
