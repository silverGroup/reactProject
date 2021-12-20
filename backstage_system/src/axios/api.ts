interface UrlDist {
    [key:string]:{
        [key:string]:string
    }
}

const UrlDist:UrlDist ={
    Login:{
        dologin:'/admin/get'
    }
}

const getUrl = (biz:string,UrlName:string):string=>{
    try {
        const bizKeys=Object.keys(UrlDist);
        if(bizKeys.indexOf(biz)<0){
            throw new Error('biz not in UrlDist')
        }
        let hostname=UrlDist[biz][UrlName]
        if(!hostname){
            throw new Error('urlname not in UrlDist')
        }
        return hostname
    } catch (error) {
        console.error(error)
        return '';
    }
}
export default getUrl;