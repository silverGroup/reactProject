Function.prototype.call= function(context,...args){
    const ctx=context|| window
    //唯一的字符串
    let func=Symbol()
    ctx[func]=this;

    ctx[func]=args.length>0?ctx[func](...args):ctx[func]()
}
myapp.call(this,123)
/**
 * 手动绑定call
 * @param {*} context 
 * @param  {...any} args 
 * @returns 
 */
Function.prototype.MyCall=function(context,...args){
    let ctx = context || window;
    //  定义symbol类型作为唯一
    let func = Symbol()
    //func作为属性执行，this指向的就是调用他的方法
    ctx[func] = this;
    args = args ? args : []
    //以对象的形式调用func
    const res = args.length>0?ctx[func](...args):ctx[func]()
    delete ctx[func];
    return res;
}
/**
 * 手动写apply
 * @param {*} context 
 * @param  {any[]} args 类型必须为数组或类数组
 */
Function.prototype.MyApply = function(context,args=[]){
    let ctx= context || window
    let func = Symbol()
    ctx[func]= this;
    const res = args.length>0?ctx[func](...args):ctx[func]()
    return res
}
/**
 * 手写bind
 * @param {*} context 新函数可做构造函数，函数可能有返回值
 * @param  {...any} args 可传入多个参数
 * bind的不会立即执行,返回一个待执行函数（闭包）
 * 实现作用域绑定，apply，参数传递（apply的数组传参）
 * 当作为构造函数的时候，进行原型继承
 */
Function.prototype.MyBind = function(context,...args){
    const fn = this
    args = args?args:[]
    return function newFun(...newFnArgs){
        //newFn
        if(this instanceof newFn){
            return new fn(...args,...newFnArgs)
        }
        return fn.apply(context,[...args,...newFnArgs])
    }
}

class People {
    constructor(name='wang',age='27'){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name}`)
    }
}
/**
 * 防抖函数
 * 第一次触发不执行，而是给出一个期限值比如200ms
 * 如果200ms内不触发，执行，触发了，清除当前计时，重新开始计时
 * 效果：短时间内触发同一事件，只执行一次
 * 应用：页面resize事件，常见于需要做页面适配的时候
 */
function debounce(func,delay){
    let timer=null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(func,delay)
    }
}
/**
 * 节流函数
 * 效果：一段时间内只做一件这个事。执行一次。
 * 应用：搜索框input事件，例如要支持输入实时搜索可以使用节流方案
 */
function throttle(func,wait,falg){
    // 一段时间内只执行一次
    let timeout= null
    return function(){
        if(flag) return
        if(!timeout){
            timeout=setTimeout(()=>{
                timeout=null
                func()
            },wait)
        }
    }
}









