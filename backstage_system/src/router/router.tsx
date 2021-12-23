
import React from 'react';
import {Navigate, useRoutes} from 'react-router-dom'
import * as Layout from '../component/index'
import * as Page from '../views/index'

// 路由拦截

/**
 * useRoutes Hook 使用
 */
const AppRouters=({isLogin=""})=>{
    console.log(isLogin)
    let element=useRoutes([
    {
      path: "system",
      element: <Layout.LoginLayout/>,
      children: [
        {
          path: "login",
          element: React.createElement(Page.Login)
        },
        // { path: "tasks", element: <DashboardTasks /> }
      ]
    },
    {   path: "dashborad", 
        element: isLogin?<Layout.MenuLayout/>:<Navigate to="/system/login" replace={true} />,
        children: [
            {
                path: "home",
                element: <Page.Home />
            }
        ]
    },
    // 404找不到
    { path: '*', element: <Page.NotFound /> }
  ]);
  return element;
}
export default AppRouters
