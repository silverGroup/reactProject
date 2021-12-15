import { Middleware } from './type'
import {Context,Next} from 'koa'

export type ResultInfo={
    code:number;
    msg?:string;
    data?:any;
    err?:any
}

/**
 * 执行结果 handler 用来给每个响应对象包装响应码等
 */
export const ResultHandler:Middleware = () => async (ctx:Context,next:Next)=>{
    const r:ResultInfo={code:0}
    try {
        const data:any =await next();
        r.code=200;
        r.msg='Success'
        r.data= data||[];
    } catch (error:any) {
        r.code=error.statusCode
        switch(error.statusCode){
            case 102:
                r.msg = '用户不存在'
                break;
            default:
                break;
        }
    }
    ctx.response.body=r
}