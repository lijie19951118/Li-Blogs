### ES6

```
新增语法：
let
const
解构赋值
模板字符串
对象简化写法
箭头函数
1.this指向：函数创建时的作用域指向的对象
2.不能作为构造函数实例化对象
3.不能使用arguments属性
4.简写
函数参数默认值
函数rest参数 fn(...args){}
扩展运算符【...】
Symbol
1.Symbol('xxx') !== Symbol('xxx')
2.Symbol.for('xxx') === Symbol.for('xxx')
3.迭代器：[Symbol.iterator] 是一个函数
生成器
function * gen() { const data = yield 'xxx'; }
let iterator = gen();
iterator.next(data) === {value: 'xxx', done: false}
Promise
Set 集合
1.自带Symbol.iterator接口，可使用for of循环
Map 键值对的集合
1.自带Symbol.iterator接口，可使用for of循环
Class
1.static 静态属性
2.继承 extends super()
3.get set 读取和修改属性时触发函数
数值扩展
1.Number.EPSILON    表示最小精度
2.二进制和八进制（0b1010）（0o777）（100）（0xff）
3.Number.isFinite()    是否无限
4.Number.isNaN()
5.Number.parseInt()    转成数字        Number.parseFloat()    转成小数
6.Number.isInteger()    是否为整数
7.Number.trunc()    将小数部分抹掉
8.Number.sign()        判断一个数是正数 负数 0
对象方法扩展
1.Object.is()    Object.is(NaN, NaN) === true
2.Object.assign()
3.Object.setPrototypeOf()    Object.getPrototypeOf()        建议使用Object.create()
模块化
1.分别暴露    export function xxx() {}
2.统一暴露    export {xxx}
3.默认暴露    export default {xxx: xxx}
1.通用引入
2.解构赋值形式
3.简便形式        针对默认暴露
- 标签src引入入口文件    <script src="./x.js" type="module"></script>
- babel    ES6 => ES5
```
