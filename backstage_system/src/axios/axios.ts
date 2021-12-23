/**
 * axios请求封装
 */

import getUrl from './api'
import instance from './intercept'
import {AxiosRequest,CustomResponse } from './type'

class AxiosAbstract{
    protected baseURL:string | undefined= process.env.APP_BASEURL
    protected headers:object={
        ContentType:'application/json;charset=UTF-8'
    }
    /**
     * 请求封装
     * @param param0 
     * @returns Promise
     */
    private apiAxios({
        baseURL = this.baseURL,
        headers = this.headers,
        method, url, data, params, responseType 
    }:AxiosRequest):Promise<CustomResponse>{
        //url传入：举例：Login.dologin
        const _url = (url as string).split('.');
        url = getUrl(_url[0],_url[1])
        return new Promise((resolve,reject)=>{
            instance({
                baseURL, 
                headers, 
                method, url,  params,data,responseType
            }).then((res)=>{
                console.log(res)
                if(res.status===200){
                    if (res.data.code===200) {
                        resolve({ status: true, message: res.data.msg, data: res.data.data, origin: res.data });
                    } else {
                        resolve({ status: false, message: res.data?.msg || (url + '请求失败'), data: res.data?.data, origin: res.data });
                    }
                }
            }).catch((error)=>{
                const message=error?.data?.message||error?.message||  (url + '请求失败');
                reject({ status:false,message,data:null})
            })
        })
    }
    /**
     * GET请求
     */
    protected getReq({ baseURL, headers, url,  params,data,responseType}:AxiosRequest):Promise<CustomResponse>{
        return this.apiAxios({
            baseURL,headers,method:"GET",url,data, params,responseType
        })
    }
    /**
     * POST请求
     * @param param0 
     * @returns 
     */
     protected postReq({ baseURL, headers, url,  params,data,responseType}:AxiosRequest):Promise<CustomResponse>{
        return this.apiAxios({
            baseURL,headers,method:"POST",url,data, params,responseType
        })
    }
    /**
     * PUT请求
     */
     protected putReq({ baseURL, headers, url,  params,data,responseType}:AxiosRequest):Promise<CustomResponse>{
        return this.apiAxios({
            baseURL,headers,method:"PUT",url,data, params,responseType
        })
    }
    /**
     * DELETE请求
     */
     protected DELETEReq({ baseURL, headers, url,  params,data,responseType}:AxiosRequest):Promise<CustomResponse>{
        return this.apiAxios({
            baseURL,headers,method:"DELETE",url,data, params,responseType
        })
    }

}
export default AxiosAbstract