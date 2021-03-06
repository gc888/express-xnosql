// 系统配置
const config = require('config')
const port = config.server.port
// 应用服务
const express = require('express')
const bodyParser = require('body-parser')
const xnosql = require(__dirname + '/xnosql_modules/express-xnosql/index.js')
// 日志相关
const log = require('tracer').colorConsole({ level: config.log.level })

// 初始化应用服务器
const app = express()
// 入参JSON解析
app.use(bodyParser.json())

// 加载express-xnosql中间件
xnosql.init(app, config.server)

// 开始服务监听
app.listen(port)
log.info(`XNosql应用启动【执行环境:${process.env.NODE_ENV},端口:${port}】`)
log.info(`[POST]http://localhost:${port}/xnosql/MODEL/insert`)
log.info(`[POST]http://localhost:${port}/xnosql/MODEL/update`)
log.info(`[POST]http://localhost:${port}/xnosql/MODEL/query`)
log.info(`[POST]http://localhost:${port}/xnosql/MODEL/page`)
log.info(`[GET ]http://localhost:${port}/xnosql/MODEL/get/:id`)
log.info(`[GET ]http://localhost:${port}/xnosql/MODEL/delete/:id`)