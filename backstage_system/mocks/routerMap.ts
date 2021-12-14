import base from './apis/base/index'

const addRouter=(router:any)=>{
    router.prefix('/mock')
    router.get(`/usercenter/login`,async (ctx:any) => {
        return  base.login
    })
    router.get(`/usercenter/user/userInfo/:id`,async (ctx:any) => {
        const { id } = ctx.params
        return ctx.params
    })
}
export default addRouter