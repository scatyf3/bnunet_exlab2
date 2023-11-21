var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/version', function(req, res, next) {
  res.send({ 'version': '1.0.0' });
});

router.get('/echo', function(req, res, next) {
  res.send({ 'name': req.query.name });
});

router.get('/sum', function(req, res, next) {
  //手动指定类型为int，否则就是字符串连缀了😭
  const num_a = parseInt(req.query.a);
  const num_b = parseInt(req.query.b);
  res.send({ 'result': num_a + num_b });
});

//login请求通常使用post，所以我们以它为例
router.post('/login', function(req, res, next) {
  const requestData = req.body; // 获取请求体数据
  //console.log(requestData)
  res.send({ 'your_post': req.body });
});


module.exports = router;
