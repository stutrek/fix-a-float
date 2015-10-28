var fixAfloat = require('./fix-a-float');

var res;

// length 19, 0s
res = fixAfloat(0.1+0.2);
if (res !== 0.3) {
	console.log('Failed. 0.1+0.2 = '+res);
	process.exit(1);
}

// length 18, 9s
res = fixAfloat(0.7+1.4);
if (res !== 2.1) {
	console.log('Failed. 0.7+1.4 = '+res);
	process.exit(1);
}

// length 17, 9s
res = fixAfloat(9.1+0.7);
if (res !== 9.8) {
	console.log('Failed. 9.1+0.7 = '+res);
	process.exit(1);
}

console.log('passed');
