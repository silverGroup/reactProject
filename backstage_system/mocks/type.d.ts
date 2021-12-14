import {Context,Next} from 'koa'
type MiddleWare = (...arg: any[]) => (ctx: Context, next?: Next) => Promise<void>;

export{
   Middleware 
}