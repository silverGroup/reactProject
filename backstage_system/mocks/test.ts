import Koa from 'koa';
const app = new Koa();
// import Router from 'koa-router';
// const router = new Router();
const router = require('koa-router')(); // 引入koa-router 并实例化
 
router.get('/app',async (ctx: { body: string; })=>{
    ctx.body='router首页'
})
app.use(router.routes());// 启动路由
app.use(router.allowedMethods()) // 可以配置也可以配置，建议配置
//设置监听端口
app.listen(9999, () => {
    console.log("服务器开启 127.0.0.1:9999");
});