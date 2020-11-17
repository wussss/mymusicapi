import Koa from 'koa' //引入
import Router from 'koa-router'
import request from 'request'
const app = new Koa()//实例化
const router = new Router() //实例化
const httpRequest = async (path, query) => {
    const musicUrl = 'http://music.163.com/api'
    const url = musicUrl + path + '?' + query
    const data = await request.post(url, (err, res) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('post', url)
        return res.body
    })
    return data
}
router.get('/personalized', async (ctx) => {
    const query = ctx.querystring ? ctx.querystring : '';
    const path = '/personalized/playlist'
    ctx.body = await httpRequest(path, query,)
})
router.get('/banner', async (ctx) => {
    const query = ctx.querystring ? ctx.querystring : '';
    const path = '/v2/banner/get'
    ctx.body = await httpRequest(path, query)
})

app.use(router.routes())//注册到app里
app.use(router.allowedMethods()) //针对options请求的响应处理

const port = 3003
app.server = app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})