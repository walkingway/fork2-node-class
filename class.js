//constructor

function Class (c) {
	if (c.initialize) {
		this.constructor = c.initialize;
	}  else {
		this.constructor = function(){};
	}
	return this.constructor;
}

module.exports = Class;

