import {Outlet} from 'react-router-dom'
const LoginLayout=()=>{
    return (
        <div>
            <h1>
                登录/注册相关页面
            </h1>
            <Outlet />
        </div>
    )
}
export default LoginLayout;