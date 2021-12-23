import base from './apis/base/index'

const addRouter=(router:any)=>{
    router.prefix('/mock')
    router.post(`/usercenter/login`,async (ctx:any) => {
        console.log(ctx.request.body)
        if(ctx.request.body.username===base.staff.data.username&&ctx.request.body.password===base.staff.data.password){
            return  base.login.success
        }else{
            return base.login.error
        }
    })
    router.get(`/usercenter/user/userInfo/:id`,async (ctx:any) => {
        const { id } = ctx.params
        return ctx.params
    })
    router.get(`/usercenter/menu`,async (ctx:any) => {
        console.log(ctx.request.body)
        return  base.menu
    })
}
export default addRouter