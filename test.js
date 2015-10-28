var fixAfloat = require('./fix-a-float');

var res;

res = fixAfloat(0.1+0.2);
if (res !== 0.3) {
	console.log('Failed. 0.1+0.2 = '+res);
	process.exit(1);
}

res = fixAfloat(0.7+1.4);
if (res !== 2.1) {
	console.log('Failed. 0.7+1.4 = '+res);
	process.exit(1);
}

console.log('passed');
