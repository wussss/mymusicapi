import Koa from 'koa' //引入
const app = new Koa()//实例化

app.use((ctx) => {
    ctx.response.body = 'hello world'
})

app.listen(3003)