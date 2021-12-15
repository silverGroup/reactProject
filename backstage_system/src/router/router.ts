
import React from 'react';
import {useRoutes} from 'react-router-dom'
import * as Layout from '../component/index'
import * as Page from '../views/index'

// export interface IRouteBase {
//     path:string;
//     element?:any;
//     redirect?:string;
//     meta:IRouteMeta;
//     auth?:boolean
// }
// export interface IRouteMeta {
//   title: string;
//   icon?: string;
// }
// export interface IRoute extends IRouteBase{
//     children?:IRoute[];
// }
// export const routes: IRoute[]=[
//     {
//         path:'/system',
//         redirect: '/system/login',
//         element: LoginLayout,
//         meta: {
//             title: '系统登录页面',
//         },
//         children: [
//             {
//                 path: 'login',
//                 element:Login,
//                 meta: {
//                     title: '登录',
//                 },
//             },
//         ],
//     }
// ]

/**
 * useRoutes Hook 使用
 */
const AppRouters=()=>{
    let element=useRoutes([
    {
      path: "/system",
      element: React.createElement(Layout.LoginLayout),
      children: [
        {
          path: "login",
          element: React.createElement(Page.Login)
        },
        // { path: "tasks", element: <DashboardTasks /> }
      ]
    },
    // { path: "team", element: <AboutPage /> },
     // 重定向
    // { path: 'home', redirectTo: '/',element:React.createElement(Login) },
    // 404找不到
    // { path: '*', element: <NotFound /> }
  ]);
  console.log(element)
  return element;
}
export default AppRouters
