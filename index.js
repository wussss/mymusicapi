import Koa from 'koa' //引入
import Router from 'koa-router'
const app = new Koa()//实例化
const userRouter = new Router({ prefix: '/users' }) //实例化并加上前缀

userRouter.get('/:id', (ctx) => {
    ctx.body = {
        method: '查询',
        name: ctx.params.id,
        age: 19
    }
})
userRouter.post('/:id', (ctx) => {
    ctx.body = {
        method: '新建对象',
        name: ctx.params.id,
        age: 19
    }
})
userRouter.delete('/:id', (ctx) => {
    ctx.status = 204
})
userRouter.put('/:id', (ctx) => {
    ctx.body = {
        method: '修改用户名',
        name: 'wuslan',
    }
})

app.use(userRouter.routes())//注册到app里
app.use(userRouter.allowedMethods()) //支持options请求

const port = 3003
const host = ''
app.server = app.listen(port, host, () => {
    console.log(`server running at http://${host ? host : 'localhost'}:${port}`)
})