function Class(param,parent) {
    var constructor = param.initialize || function () {};
    var key;
    //子类的prototype对象，指向一个父类的实例，为了防止prototype对象的constructor被替换成父类的constructor必须替换回来
    if (parent){
    	constructor.prototype = new parent();
    	constructor.prototype.constructor = constructor;
    }
    
    for (key in param){
    	constructor[key] = param[key];
    }

    for (key in parent){
    	if(parent.hasOwnProperty(key) && typeof(parent[key]) == 'function' && key != 'initialize')
    	//首先查找对象自身是否有这个方法或者属性，如果没找到就会去对象的构造函数的原型对象中查找;因此这里要构造一个原型链。
    		constructor.prototype[key] = parent[key];
    }

    return constructor;
}

module.exports = Class;