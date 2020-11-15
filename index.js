import Koa from 'koa' //引入
const app = new Koa()//实例化

app.use(async (ctx, next) => {
    ctx.response.body = 'hello world'
    console.log('进入中间件1')
    await next()
    console.log('退出中间件1')
})
app.use(async (ctx, next) => {
    ctx.response.body = 'hello world'
    console.log('进入中间件2')
    await next()
    console.log('退出中间件2')
})
app.use(async (ctx, next) => {
    ctx.response.body = 'hello world'
    console.log('进入中间件3')
    await next()
    console.log('退出中间件3')
})
app.use(async (ctx, next) => {
    ctx.response.body = 'hello world'
    console.log('进入中间件4')
    console.log('退出中间件4')
})

app.listen(3003)//程序运行端口