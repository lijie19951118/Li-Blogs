import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.mHHrDb8M.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ES6.md","filePath":"ES6.md"}'),e={name:"ES6.md"},l=p(`<h3 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-label="Permalink to &quot;ES6&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>新增语法：</span></span>
<span class="line"><span>let</span></span>
<span class="line"><span>const</span></span>
<span class="line"><span>解构赋值</span></span>
<span class="line"><span>模板字符串</span></span>
<span class="line"><span>对象简化写法</span></span>
<span class="line"><span>箭头函数</span></span>
<span class="line"><span>1.this指向：函数创建时的作用域指向的对象</span></span>
<span class="line"><span>2.不能作为构造函数实例化对象</span></span>
<span class="line"><span>3.不能使用arguments属性</span></span>
<span class="line"><span>4.简写</span></span>
<span class="line"><span>函数参数默认值</span></span>
<span class="line"><span>函数rest参数 fn(...args){}</span></span>
<span class="line"><span>扩展运算符【...】</span></span>
<span class="line"><span>Symbol</span></span>
<span class="line"><span>1.Symbol(&#39;xxx&#39;) !== Symbol(&#39;xxx&#39;)</span></span>
<span class="line"><span>2.Symbol.for(&#39;xxx&#39;) === Symbol.for(&#39;xxx&#39;)</span></span>
<span class="line"><span>3.迭代器：[Symbol.iterator] 是一个函数</span></span>
<span class="line"><span>生成器</span></span>
<span class="line"><span>function * gen() { const data = yield &#39;xxx&#39;; }</span></span>
<span class="line"><span>let iterator = gen();</span></span>
<span class="line"><span>iterator.next(data) === {value: &#39;xxx&#39;, done: false}</span></span>
<span class="line"><span>Promise</span></span>
<span class="line"><span>Set 集合</span></span>
<span class="line"><span>1.自带Symbol.iterator接口，可使用for of循环</span></span>
<span class="line"><span>Map 键值对的集合</span></span>
<span class="line"><span>1.自带Symbol.iterator接口，可使用for of循环</span></span>
<span class="line"><span>Class</span></span>
<span class="line"><span>1.static 静态属性</span></span>
<span class="line"><span>2.继承 extends super()</span></span>
<span class="line"><span>3.get set 读取和修改属性时触发函数</span></span>
<span class="line"><span>数值扩展</span></span>
<span class="line"><span>1.Number.EPSILON    表示最小精度</span></span>
<span class="line"><span>2.二进制和八进制（0b1010）（0o777）（100）（0xff）</span></span>
<span class="line"><span>3.Number.isFinite()    是否无限</span></span>
<span class="line"><span>4.Number.isNaN()</span></span>
<span class="line"><span>5.Number.parseInt()    转成数字        Number.parseFloat()    转成小数</span></span>
<span class="line"><span>6.Number.isInteger()    是否为整数</span></span>
<span class="line"><span>7.Number.trunc()    将小数部分抹掉</span></span>
<span class="line"><span>8.Number.sign()        判断一个数是正数 负数 0</span></span>
<span class="line"><span>对象方法扩展</span></span>
<span class="line"><span>1.Object.is()    Object.is(NaN, NaN) === true</span></span>
<span class="line"><span>2.Object.assign()</span></span>
<span class="line"><span>3.Object.setPrototypeOf()    Object.getPrototypeOf()        建议使用Object.create()</span></span>
<span class="line"><span>模块化</span></span>
<span class="line"><span>1.分别暴露    export function xxx() {}</span></span>
<span class="line"><span>2.统一暴露    export {xxx}</span></span>
<span class="line"><span>3.默认暴露    export default {xxx: xxx}</span></span>
<span class="line"><span>1.通用引入</span></span>
<span class="line"><span>2.解构赋值形式</span></span>
<span class="line"><span>3.简便形式        针对默认暴露</span></span>
<span class="line"><span>- 标签src引入入口文件    &lt;script src=&quot;./x.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>- babel    ES6 =&gt; ES5</span></span></code></pre></div>`,2),t=[l];function i(c,o,r,x,u,b){return a(),n("div",null,t)}const _=s(e,[["render",i]]);export{m as __pageData,_ as default};
