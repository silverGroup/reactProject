/**
 * Koa +koa-router搭建简易服务器
 */
// import * as http from 'http'
import Koa ,{Context} from "koa";
import koaBody from 'koa-body'
import cors from "koa2-cors"
import log4js from "log4js";
import logger from "koa-logger";
import {ResultHandler} from './resultHandle'
import addRouter from './routerMap'
const router = require('koa-router')();
const app=new Koa();
const port=8888;
const log4 = log4js.getLogger();
log4.level = "debug";
//日志打印
app.use(logger(info => {
  log4.debug(info);
}));
app.use(koaBody())
app.use(
    cors({
        origin: function(ctx) { //设置允许来自指定域名请求
            if (ctx.url === '/') {
                return '*'; // 允许来自所有域名请求
            }
            return 'http://localhost:'+port; //只允许http://localhost:8080这个域名的请求
        },
        maxAge: 5, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
)
app.use( async (ctx,next)=>{
  await next()
  log4.debug('请求路径:  '+ ctx.request.url);
  log4.debug('请求body:  ' + JSON.stringify(ctx.request.body));
  log4.debug('返回数据:  '+ JSON.stringify(ctx.body));
})
addRouter(router);
app.use(ResultHandler());
//加载路由
// addRouter(router)
// 指定一个url匹配
// router.get('/', async (ctx: any,next: () => any) => {
//     await next()
// })

app.use(router.routes());// 启动路由
app.use(router.allowedMethods()) // 可以配置也可以配置，建议配置

app.use(async (ctx: Context) => {
  log4.error(`404 ${ctx.message} : ${ctx.href}`);
  ctx.status = 404;
  ctx.body = "404! api not found !";
});

// koa already had middleware to deal with the error, just register the error event
app.on("error", (err, ctx: Context) => {
  log4.error(err); //log all errors
  ctx.status = 500;
  if (ctx.app.env !== "development") {
    //throw the error to frontEnd when in the develop mode
    ctx.res.end(err.stack); //finish the response
  }
});
// 启动服务监听本地8888端口
app.listen(port, () => {
    console.log("mock server running at: http://localhost:%d",port);
})
/**
 * node+mock搭建简易服务器
 */
// const _map=require('./routerMap')
// import _map from './routerMap'
// // import {Request,Response} from './type'
// import * as Mock from 'mockjs'
// http.createServer((req:any,res:any)=>{
//     res.writeHead(200,{
//         'Content-Type': 'application/json;charset=utf-8',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': '*',
//         'Access-Control-Allow-Headers': '*',
//         'Cache-Control': 'no-cache,no-store', // clear cache
//     })
//     if(req.method==='OPTIONS'){
//         res.end(null)
//     }
//     if(req.method === 'POST'||req.method==='GET'){
//         console.log('GET')
//         let postData=''
//         req.addListener('data',(dataBuffer: string)=>postData+=dataBuffer)
//         req.addListener('end',()=>{
//             console.log("url=>",req.url)
//             postData = postData?JSON.parse(postData):postData
//             const originData =_map[req.url]?Mock.mock(_map[req.url]):_map[req.url]
//             const data = originData
//             setTimeout(() => {
//                 res.end(JSON.stringify(data))
//             }, ((Math.random() - 0.5) + 1) * 500, 10) // 随机数
//         })
//     }
// }).listen(port,()=>{
//     console.log("mock server running at: http://localhost:%d",port);
// })
