function Class(param,parent) {
    var child = param.initialize || function () {};
    var key;

    for (key in parent){
        if(parent.hasOwnProperty(key))child[key] = parent[key];
    }
    parent = parent || Object;
    // 临时构造函数ctor，用来打断父对象和子对象原型的直接链接，以防止父对象原型改变殃及子对象
    function ctor(){};
    //child.prototype copy parent.prototype，not ref；
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    //上面这两步会改变child.prototype.constructor为父类的构造函数，要重新把constructor指回自己
    child.prototype.constructor = child;
    
    for (key in param){
    	child.prototype[key] = param[key];
    }

    child.__super__ = parent;
    
    //b.super --> B --> b.prototype --> new ctor --> a.prtootype
    var _child = child;
    child.prototype.super = function(){
        //
        if(_child.__super__.prototype[arguments[0]] !== undefined) 
        {
            //对于this.super("foo",a*10,b*100)要去掉第一个参数，然后再把后两个参数传递给父类相关的方法
            var args = Array.prototype.slice.call(arguments,1);
            var result = _child.__super__.prototype[arguments[0]].apply(this,args);
            return result;
        } 
        else 
        {
            return undefined;
        }
    }
   
    return child;
};

module.exports = Class;