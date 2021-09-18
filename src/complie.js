class Compiler{
    constructor(vm){
        this.el=vm.$el;
        this.vm=vm;
        this.compile(this.el)
    }
    //编译模版
    compile(el){
        let childNodes =el.childNodes
        Array.from(childNodes).forEach(node=>{
            if(this.isTextNode(node)){
                this.compileText(node)
            }else if(this.isElementNode(node)){
                this.complieElement(node)
            }
            //判断node节点，是否有子节点，如果有子节点，要递归调用complie
            if(node.childNodes && node.childNodes.length!==0){
                this.compile(node)
            }
        })
    }
    //编译元素节点
    complieElement(node){
        Array.from(node.attributes).forEach(attr=>{
            let attrName =attr.name
            if(this.isDirective(attrName)){
                debugger;
                attrName=attrName.substr(2)
                let key=attr.value
                this.update(node,key,attrName)
            }
        })
    }
    update(node,key,attrName){
        debugger;
        let updateFn= this[attrName+'Updater'];
        updateFn && updateFn.call(this,node,this.vm[key],key)
    }
    //处理v -text
    textUpdater(node,value){
        node.textContent=value
        new Watcher(this.vm,key,(newValue)=>{
            node.textContent=newValue
        })
    }
    //处理 v-model
    saberUpdater(node,value,key){
        node.value=value;
        new Watcher(this.vm,key,(newValue)=>{
            node.value=newValue
        })
        node.addEventListener('input',()=>{
            this.vm[key]=node.value
        })
    }
    //处理文本
    compileText(node){
        
       let reg=/\[(.+?)\]/
       let value =node.textContent;
       if(reg.test(value)){
           let key=RegExp.$1.trim()
           node.textContent=value.replace(reg,this.vm[key])
           new Watcher(this.vm,key,(newValue)=>{
               node.textContent=newValue
           })
       }
    }
    //判断指令
    isDirective(attrName){
        return attrName.startsWith('hs')
    }
    //判断是不是文本
    isTextNode(node){
        return node.nodeType===3
    }
    //判断是不是节点
    isElementNode(node){
        return node.nodeType===1
    }

}
class hero{
    constructor(options){
        this.$options=options||{};
        this.$data =options ;
        this.$el =document.querySelector('#app');
        this._proxyData(this.$data)
        new Observer(this.$data)
        new Compiler(this)
    }
    _proxyData(data){
            Object.keys(data).forEach(key=>{
                Object.defineProperty(this,key,{
                    get(){
                        return data[key]
                    },
                    set(newValue){
                        if(newValue===data[key]){
                            return
                        }
                        data[key]= newValue
                    }
                })
            })
    }
}
class Watcher{
    constructor(vm,key,cb){
        this.vm=vm;
        this.key=key;
        this.cb=cb;
            //把watcher对象记录到Dep的静态属性target
            Dep.target=this
        this.oldValue =vm[key]  //此处触发get
        Dep.target=null
    

    }
    update(){
        let newValue=this.vm[this.key]
       if(this.oldValue=== newValue){
           return 
       }
       this.cb(newValue)
    }

}
  
class Observer{

    constructor(data){
     this.walk(data)
    }
    walk(data){
     if(!data ||typeof data !== 'object'){
         return 
     }
     Object.keys(data).forEach(key=>{
         this.defineReactive(data,key,data[key])
     })
 
    }
    defineReactive(obj,key,val){
        if(typeof val ==='object'){
            return new Observer(val)
 
        }
        let dep= new Dep()
         Object.defineProperty(obj,key,{
             get(){
                 Dep.target && dep.addsub(Dep.target)//在编译的时候，触发target，将watcher的this添加在dep上
                 return val
             },
             set(newValue){
                 if(val===newValue){
                     return 
                 }
                 val=newValue;
                 dep.notify()
             }
         })
    }
 }
   
class Dep{
    constructor(){
     this.subs=[]
    }
    addsub(sub){
         if(sub && sub.update){
             this.subs.push(sub)
         }
    }
    notify(){
     this.subs.forEach(sub=>{
         sub.update()
     })
    }
 }