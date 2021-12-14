
import React from 'react';
export interface IRouteBase {
    path:string;
    component?:any;
    redirect?:string;
    meta:IRouteMeta;
    auth?:boolean
}
export interface IRouteMeta {
  title: string;
  icon?: string;
}
export interface IRoute extends IRouteBase{
    children?:IRoute[];
}
const routes: IRoute[]=[
    {
        path:'/base',
        redirect: '/base/login',
        component:'',
        meta: {
            title: '系统登录页面',
        },
        children: [
            {
                path: '/system/login',
                component: React.lazy(() => import('../views/system/login/login')),
                meta: {
                title: '登录',
                },
            },
        ],
    }
]