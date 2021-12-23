import axios,{AxiosRequestConfig,Method} from "axios";

interface PendingType{
    url?:string;
    method?:Method;
    params:any;
    data:any;
    cancel:Function;
}
/**
 * 加载列表pending
 * 
 */
const pending:Array<PendingType>=[]

// `cancelToken` 使用 cancel token 取消请求
const CancelToken =axios.CancelToken;

const instance = axios.create({
    timeout:10000,
    responseType: 'json'
})
// let LoadingInstance:ElLoadingComponent;
//移除重复请求
const removePending = (config:AxiosRequestConfig)=>{
    for(const key in pending){
        const item:number= +key;
        const list:PendingType= pending[key]
        if(list.url === config.url && list.method=== config.method
        &&JSON.stringify(list.params)=== JSON.stringify(config.params)
        &&JSON.stringify(list.data) === JSON.stringify(config.data)){
            // list.cancel('操作太频繁，请稍后再试')
            pending.splice(item,1)
        }
    }
}
//请求拦截器
instance.interceptors.request.use(
    request =>{
        removePending(request)
        request.cancelToken=new CancelToken((c)=>{
            //c： cancel 函数作为参数放入pending里面
            pending.push({
                url:request.url,
                method:request.method,
                params:request.params,
                data:request.data,
                cancel:c
            })
        })
        return request
    },
    error=>{
        return Promise.reject(error)
    }
)
//响应拦截器
instance.interceptors.response.use(
    response=>{
        removePending(response.config)
        const errorCode = response?.data?.errorCode;
        switch(errorCode){
            case '401':
                break;
            default:
                break;
        }
        return response;
    },
    error=>{
        const response =error.response
        switch(response?.status){
            case 401:
                break;
           case 403:
                // 没有权限
                break;
            case 500:
                // 服务端错误
                break;
            case 503:
                // 服务端错误
                break;
            default:
                break;
        }
        //超时重新请求
        const config =error.config;
        const [RETRY_COUNT,RETRY_DELAY] =[1,1000]
        if(config && RETRY_COUNT){
            config.__retryCount = config.__retryCount || 0;
            if(config.__retryCount>RETRY_COUNT){
                return Promise.reject(response ||{ message: error.message })
            }
            //重新请求计数
            config.__retryCount++;
            //创建新的Promise来处理指数后退
            const backoff = new Promise<void>((resolve)=>{
                setTimeout(()=>{
                    resolve();
                },RETRY_DELAY||1)
            })
            //instance重新请求Promise
            return backoff.then(()=>{
                return instance(config)
            })
        }
        return Promise.reject(response||{ message: error.message })
    }
)

export default instance