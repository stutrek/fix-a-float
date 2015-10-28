(function(factory) {

    //AMD
    if(typeof define === 'function' && define.amd) {
        define([], factory);

    //NODE
    } else if(typeof module === 'object' && module.exports) {
        module.exports = factory();
    }

})(function () {

	return function fixAfloat(float) {
		var str = float.toString();
		
		if (str.length < 18) {
			return float;
		}

		if (str.indexOf('.') === -1) {
			return float;
		}

		if (str.indexOf('e') !== -1) {
			return float;
		}

		var i = str.length - 2;
		var lookingFor = str.charAt(i) === '9' ? '9' : '0';
		
		while (str.charAt(i) === lookingFor) {
			i--;
		}

		return parseFloat(float.toPrecision(i));
	};

});
