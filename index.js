import Koa from 'koa' //引入
import Router from 'koa-router'
const app = new Koa()//实例化
const userRouter = new Router({ prefix: '/users' }) //实例化并加上前缀

userRouter.get('/:id',(ctx) => {
    ctx.body = `这是用户 ${ctx.params.id}`
})
userRouter.get('/', (ctx) => {
    ctx.body = '请求用户列表1'
})
userRouter.options('/',(ctx) => {
    ctx.header.allowedMethods = 'get,options'
})
app.use(userRouter.routes())//注册到app里
app.use(userRouter.allowedMethods()) //支持options请求

const port = 3003
const host = ''
app.server = app.listen(port, host, () => {
    console.log(`server running at http://${host ? host : 'localhost'}:${port}`)
})