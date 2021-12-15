


import LoginLayout from '../component/logo/LoginLayout'
import  Login from '../views/system/login/login'



// import {IRoute} from './router'
// import {routes} from './router'
// /**
//  * 将路由转换为一维数组
//  * @param routeList 路由
//  * @param deep 是否深层转化
//  * @param auth 路由是否需要检查授权, 路由配置的auth优先级比这里高
//  */
// export function flattenRoute(routeList:IRoute[],deep:boolean,auth:boolean){
//     const result: IRoute[] = [];
//     for(let i=0;i<routeList.length;i++){
//         const route = routeList[i];
//         result.push({
//             ...route,
//             auth: typeof route.auth !== 'undefined' ? route.auth : auth,
//         })
//         if(route.children && deep){
//             result.push(...flattenRoute(route.children, deep, auth))
//         }
//     }
//     return result;
// }
// function getLayoutRouteList(): IRoute[] {
//   return flattenRoute(routes, false, false);
// }
// /**
//  * 设置三个路由状态
//  * 一: 最外层的路由，例如  Layout UserLayout ...
//  * 二: 系统路由, 例如 Login Register RegisterResult
//  * 三: 业务路由，为 / 路由下的业务路由
//  */

// export const layoutRouteList = getLayoutRouteList();
// console.log(layoutRouteList)

// // export const businessRouteList = getBusinessRouteList();

// // export const systemRouteList = getSystemRouteList();
