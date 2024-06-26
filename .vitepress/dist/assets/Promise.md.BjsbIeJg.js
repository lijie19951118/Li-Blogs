import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.DFrfdyhf.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Promise.md","filePath":"Promise.md"}'),e={name:"Promise.md"},i=p(`<h3 id="promise" tabindex="-1">Promise <a class="header-anchor" href="#promise" aria-label="Permalink to &quot;Promise&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>promise 的状态</span></span>
<span class="line"><span>实例对象中的一个属性 【PromiseState】</span></span>
<span class="line"><span>pending    未决定的</span></span>
<span class="line"><span>resolved / fulfilled    成功</span></span>
<span class="line"><span>rejected    失败</span></span>
<span class="line"><span>promise 对象的值</span></span>
<span class="line"><span>实例对象中另一个属性 【PromiseResult】</span></span>
<span class="line"><span>保存着异步任务【成功/失败】的结果</span></span>
<span class="line"><span>resolve，reject方法去修改</span></span>
<span class="line"><span>Promise.resolve()</span></span>
<span class="line"><span>参数非promise对象，返回一个成功的promise对象，返回值为传入的值</span></span>
<span class="line"><span>参数为promise对象，返回状态为传入的promise的状态，返回的值为传入的promise的值</span></span>
<span class="line"><span>Promise.reject()</span></span>
<span class="line"><span>返回状态永远是失败的</span></span>
<span class="line"><span>返回的值是传入的值</span></span>
<span class="line"><span>Promise.all()</span></span>
<span class="line"><span>传入由promise组成的数组</span></span>
<span class="line"><span>如果全部成功，状态返回成功，值返回所有promise犯规的值组成的数组</span></span>
<span class="line"><span>如果有失败，状态返回失败，值返回第一个失败的值</span></span>
<span class="line"><span>Promise.race()</span></span>
<span class="line"><span>传入由多个promise组成的数组，赛跑</span></span>
<span class="line"><span>返回状态和值为第一个改成状态的promise的状态和值</span></span>
<span class="line"><span>改变promise状态的3中方法</span></span>
<span class="line"><span>resolve、reject、throw  抛出错误</span></span>
<span class="line"><span>Promise实例的then方法返回一个新的promise</span></span>
<span class="line"><span>1，throw：返回状态为失败，返回值为失败的值</span></span>
<span class="line"><span>2，return 非promise对象，返回状态为成功，返回值为return 的值</span></span>
<span class="line"><span>3，return promise对象，返回状态/值取决于promise结果的状态/值</span></span>
<span class="line"><span>async方法</span></span>
<span class="line"><span>async函数的返回值是一个promise实例对象，promise状态和值取决于函数的返回值</span></span>
<span class="line"><span>1，非promise对象，状态：fulfilled，返回值：函数返回值</span></span>
<span class="line"><span>2，promise对象，状态：promise的状态，返回值：promise的返回值</span></span>
<span class="line"><span>3，throw抛出错误，状态：rejected，返回值：错误数据</span></span></code></pre></div>`,2),l=[i];function r(o,c,t,m,d,_){return a(),n("div",null,l)}const P=s(e,[["render",r]]);export{u as __pageData,P as default};
