# bnunet_exlab2

这是北京师范大学2023秋计网额外的lab，由[@mmdjiji](https://github.com/mmdjiji)设计编写，由本人完成🥳

非常非常感谢能有这么有趣的实验可以完成～

# 任务
- 完成两数之和✅
- 完成处理post请求的routing✅
- 为这个任务设计一个前端

# debug note

curl发送post请求
```sh

curl -X POST -H "Content-Type: application/json" -d '{"key1":"value1","key2":"value2"}' http://127.0.0.1:3000/api/login
```

# pug/jade入门

```sh
npm install jade --global
jade filename.jade
```

# 实验结果展示

## 运行

```sh
➜  bnunet_exlab2 git:(main) ✗ npm start

> exlab2@1.0.0 start
> node ./bin/www

```
## api展示

```
➜  ~ curl -X GET  http://127.0.0.1:3000/api/version
{"version":"1.0.0"}%
➜  ~ curl http://localhost:3000/api/echo\?name\=cat
{"name":"cat"}%
➜  ~ curl http://localhost:3000/api/sum\?a\=5\&b\=7
{"result":12}%
➜  ~ curl -X POST -H "Content-Type: application/json" -d '{"username":"john", "password":"password123"}' http://localhost:3000/api/login
{"your_post":{"username":"john","password":"password123"}}%
```

## 后台展示

```
➜  bnunet_exlab2 git:(main) ✗ npm start

> exlab2@1.0.0 start
> node ./bin/www

GET / 304 101.585 ms - -
GET /stylesheets/style.css 304 1.206 ms - -
GET /api/sum?a=114&b=514 200 1.511 ms - 14
GET /api/index 404 14.499 ms - 1312
GET /stylesheets/style.css 304 1.164 ms - -
GET /api/version 200 1.141 ms - 19
GET /api/version 200 1.450 ms - 19
GET /api/echo 200 1.057 ms - 2
GET /api/echo=meow 404 15.191 ms - 1312
GET /api/echo=meow 404 12.238 ms - 1312
GET /api/echo 200 2.412 ms - 2
GET /api/echo?=meow 200 1.183 ms - 2
GET /api/echo 200 0.750 ms - 2
GET /echo?name=catn 404 10.865 ms - 1312
GET /echo?name=cat 404 8.677 ms - 1312
GET /api/echo?name=cat 200 2.431 ms - 14
GET /api/sum?a=5&b=7 200 1.048 ms - 13
GET /api/sum?a=5&b=7 200 1.094 ms - 13
POST /api/login 200 6.562 ms - 58
```