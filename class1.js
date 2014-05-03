//constructor

function Class (param) {
	if (param.initialize) {
		this.constructor = param.initialize;
	}  else {
		this.constructor = function(){};
	}

	this.constructor.prototype = {
		getA: function getA() {
			return this.a;
		},
		getB: function getB() {
			return this.b;
		}
	}

	this.constructor.

	return this.constructor;
}

module.exports = Class;

