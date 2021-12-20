/**
 * 请求生成实例调用
 */
import AxiosAbstract from "./axios";
import {GetDemo,PostDemo} from './type'

class Basic extends AxiosAbstract{
    /**
     * get
     */
    get({url,params}:GetDemo) {
        return this.getReq({ url, params });
    }
    /**
     * post
     */
    post({url,data}:PostDemo) {
        return this.postReq({ url, data });
    }
}
let instance;
export default (()=>{
    if(instance) return instance
    instance = new Basic()
    return instance
})()