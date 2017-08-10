# ![Fix-A-Float](http://stutrek.github.io/fix-a-float/fix-a-float.svg)

99.0000000000000005% of the time floating point math is perfect. The rest of the time we have this problem:

```
>> 0.1 + 0.2
0.30000000000000004
```

This solves that problem.

```
>> fixAfloat(0.1 + 0.2)
0.3
```

## Installation

`npm install fix-a-float`

## Usage

```
var fixAfloat = require('fix-a-float');

console.log(fixAfloat(0.1+0.2));
```

## How does it do it?

It converts the number to a string, looks for a long run of zeros or nines at the end, removes them, and coverts back to a float.

### Should I use this all the time, everywhere?

Absolutely not. Only use it in places where you need human readable numbers but don't know the precision you need. It doesn't actually solve any of the larger issues with floats.
