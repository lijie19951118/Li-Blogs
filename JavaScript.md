# js数据类型

js8大类型

`undefined null boolean number string object | symbol bigInt`

原始数据类型：`undefined	null boolean number	string`

引用数据类型：对象、数组、函数

\*\*\*

如何判断数据类型&#x9;

`typeof`

```javascript
typeof 2 	// number
typeof true	// boolean
// 问题
typeof {}	// object
typeof []	// object
```

**`instanceof`** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```javascript
2 instanceof Number	// true
[] instanceof Array	// true
```

手写`instanceof`原理实现

```javascript
function myInstance(value, fn) {
	// 原型
	let _proto = Object.getPrototypeOf(value);
	const _prototype = fn.prototype;
	// 循环判断
	while(true) {
		// 到顶了
		if (!_proto) {
			return false
		}
		// 判断是否相同
		if (_proto === _prototype) {
			return true
		}
		// 向上一层寻找原型
		_proto = Object.getPrototypeOf(_proto)
	}
}
```

