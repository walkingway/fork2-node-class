//constructor

function Class (c) {
	if (c.initialize) {
		this.constructor = c.initialize;
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

	return this.constructor;
}

module.exports = Class;

