>这是我的第一个Koa程序，实现RESTful API

#### 初始化项目

```javascript
mkdir xxxx //创建项目文件夹
npm init //初始化
npm install koa --save //安装koa
npm install nodemon --save-dev //安装自动重启工具
```
```json
"type": "module" //在package.json中配置type为module以使用ES6 的import/export语法
"scripts": {
    "start": "nodemon index.js"
  },
```

```javascript
//新建index.js程序入口文件
import Koa from 'koa'//引入
const app=new Koa()//实例化
app.use(async (ctx)=>{
   ctx.response.body='hello world'
})//中间件
app.listen(3000)//程序运行端口
```

