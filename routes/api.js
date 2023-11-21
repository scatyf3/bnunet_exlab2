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
  //手动置顶类型为int，否则就是字符串连缀了😭
  const num_a = parseInt(req.query.a);
  const num_b = parseInt(req.query.b);
  res.send({ 'result': num_a + num_b });
});



module.exports = router;
