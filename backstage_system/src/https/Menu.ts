import axios  from "../axios";
export type resultHandle={
    result?: boolean,
    data?:{list?:[]},
    message?: string,
}
export const MenuGet=async (params:object)=>{
    let url='Base.menu'
    let res=await axios.get({url,params})
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