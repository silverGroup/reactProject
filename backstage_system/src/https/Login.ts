import axios  from "../axios";
export type resultHandle={
    result?: boolean,
    data?:{token?:string| undefined,ticket?:string| undefined},
    message?: string,
}
export const LoginPost=async (data:object)=>{
    let url='Login.dologin'
    let res=await axios.post({url,data})
    let result:resultHandle={}
    try {
        result={
            result: res.status,
            data:res.data,
            message: res.message,
        }
    } catch (error:any) {
        result = {
            result: false,
            data:{},
            message: error.toString(),
        };
    }
    return result
}