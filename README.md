# express-xnosql
NoSql服务应用，基于express-xnosql中间件，快速构建轻量小巧灵活的NoSql服务

[传送门：XServer官网文档](http://www.xserver.top)

整体框架使用说明
>
	1,config/default.js中设置数据库连接，执行npm install
	2,node app.js(启动)

单独使用express-xnosql中间件(任意express应用均可集成)
>
	1, npm install express-xnosql

	2, const xnosql = require('exoress-xnosql')

	3, xnosql.init(app, config.server)

框架目录结构（后台）
>
	├── README.md
	├── app.js (应用服务入口)
	├── config (应用服务配置)
	│   ├── default.json
	│   └── production.json
	├── node_modules
	├── package.json
	├── src
	└── xnosql_modules
	    └── express-xnosql

RESTful规则
>
	[POST]http://host:port/xnosql/MODEL/create
	[POST]http://host:port/xnosql/MODEL/update
	[POST]http://host:port/xnosql/MODEL/query
	[POST]http://localhost:3636/xnosql/MODEL/page
	[GET]http://host:port/xnosql/MODEL/get/:id
	[GET]http://host:port/xnosql/MODEL/destroy/:id

例子
>
	以一个用户模块为例，需要对用户进行增删改查:
	需要注意的是默认自动创建id,createdAt,updatedAt三个字段，无须人工处理
	[POST]http://localhost:port/xnosql/user_model/create
		post body:{"username":"cheney","password":"123"}
	[POST]http://localhost:port/xnosql/user_model/update
		post body:{id:1,"username":"cheney","password":"456"}
	[POST]http://localhost:port/xnosql/user_model/query
		post body:{"username":"cheney","password":"123"}
	[GET]http://localhost:port/xnosql/user_model/get/1
	[GET]http://localhost:port/xnosql/user_model/destroy/1

帮助联系
>
	作者:cheneyxu
	邮箱:457299596@qq.com
	QQ:457299596

更新日志
>
	2017.03.25:无后端理念确认，1.0版本推出
	2017.03.27:使用async...await封装mongodb使用
	2017.04.01:为支持ES7做准备，代码优化
	2017.04.02:以express中间件的形式提供服务，更加高内聚低耦合
	2017.04.08:以中间件的形式重命名
	2017.06.12:重构数据库连接方式
	2017.12.05:更新所有依赖包
	2018.05.03:精简更新所有依赖，全新版本
	2018.10.29:升级所有依赖
	2019.01.13:增加mongodb的封装方法对于insertOne和insertMany的判断