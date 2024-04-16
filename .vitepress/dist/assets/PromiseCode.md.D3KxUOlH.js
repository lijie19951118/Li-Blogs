import{_ as s,c as n,o as a,a2 as t}from"./chunks/framework.mHHrDb8M.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PromiseCode.md","filePath":"PromiseCode.md"}'),p={name:"PromiseCode.md"},e=t(`<h3 id="手写promise" tabindex="-1">手写Promise <a class="header-anchor" href="#手写promise" aria-label="Permalink to &quot;手写Promise&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Promise {</span></span>
<span class="line"><span>	constructor(executor) {</span></span>
<span class="line"><span>		this.PromiseState = &#39;pending&#39;;</span></span>
<span class="line"><span>		this.PromiseResult = null;</span></span>
<span class="line"><span>		this.callBacks = [];</span></span>
<span class="line"><span>		const self = this;</span></span>
<span class="line"><span>		// resolve函数</span></span>
<span class="line"><span>		function resolve(data) {</span></span>
<span class="line"><span>			if (self.PromiseState !== &#39;pending&#39;) return;</span></span>
<span class="line"><span>			self.PromiseState = &#39;fulfilled&#39;;</span></span>
<span class="line"><span>			self.PromiseResult = data;</span></span>
<span class="line"><span>			setTimeout(() =&gt; {</span></span>
<span class="line"><span>				self.callBacks.forEach(item =&gt; {</span></span>
<span class="line"><span>					item.onResolve()</span></span>
<span class="line"><span>				});</span></span>
<span class="line"><span>			})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// reject 函数</span></span>
<span class="line"><span>		function reject(data) {</span></span>
<span class="line"><span>			if (self.PromiseState !== &#39;pending&#39;) return;</span></span>
<span class="line"><span>			self.PromiseState = &#39;rejected&#39;;</span></span>
<span class="line"><span>			self.PromiseResult = data;</span></span>
<span class="line"><span>			setTimeout(() =&gt; {</span></span>
<span class="line"><span>				self.callBacks.forEach(item =&gt; {</span></span>
<span class="line"><span>					item.onReject()</span></span>
<span class="line"><span>				});</span></span>
<span class="line"><span>			})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		try {</span></span>
<span class="line"><span>			executor(resolve, reject);</span></span>
<span class="line"><span>		} catch (e) {</span></span>
<span class="line"><span>			reject(e)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 添加 then 方法</span></span>
<span class="line"><span>	then(onResolve, onReject) {</span></span>
<span class="line"><span>		const self = this;</span></span>
<span class="line"><span>		// 判断没有传then第二个参数</span></span>
<span class="line"><span>		if (typeof onReject !== &#39;function&#39;) {</span></span>
<span class="line"><span>			onReject = (reason) =&gt; {</span></span>
<span class="line"><span>				throw reason</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		// 判断没有传then第一个参数</span></span>
<span class="line"><span>		if (typeof onResolve !== &#39;function&#39;) {</span></span>
<span class="line"><span>			onResolve = value =&gt; value;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>			function callback(type) {</span></span>
<span class="line"><span>				try {</span></span>
<span class="line"><span>					const result = type(self.PromiseResult);</span></span>
<span class="line"><span>					if (result instanceof Promise) {</span></span>
<span class="line"><span>						result.then(v =&gt; {</span></span>
<span class="line"><span>							resolve(v)</span></span>
<span class="line"><span>						}, r =&gt; {</span></span>
<span class="line"><span>							reject(r)</span></span>
<span class="line"><span>						})</span></span>
<span class="line"><span>					} else {</span></span>
<span class="line"><span>						resolve(result);</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				} catch (e) {</span></span>
<span class="line"><span>					reject(e)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if (this.PromiseState === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span>				setTimeout(() =&gt; {</span></span>
<span class="line"><span>					callback(onResolve)</span></span>
<span class="line"><span>				})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if (this.PromiseState === &#39;rejected&#39;) {</span></span>
<span class="line"><span>				setTimeout(() =&gt; {</span></span>
<span class="line"><span>					callback(onReject)</span></span>
<span class="line"><span>				})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if (this.PromiseState === &#39;pending&#39;) {</span></span>
<span class="line"><span>				this.callBacks.push({</span></span>
<span class="line"><span>					onResolve: function () {</span></span>
<span class="line"><span>						callback(onResolve)</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					onReject: function () {</span></span>
<span class="line"><span>						callback(onReject)</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				});</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 添加 catch 方法</span></span>
<span class="line"><span>	catch(onReject) {</span></span>
<span class="line"><span>		return this.then(undefined, onReject);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 添加 resolve 方法</span></span>
<span class="line"><span>	static resolve(data) {</span></span>
<span class="line"><span>		return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>			if (data instanceof Promise) {</span></span>
<span class="line"><span>				data.then(v =&gt; {</span></span>
<span class="line"><span>					resolve(v)</span></span>
<span class="line"><span>				}, r =&gt; {</span></span>
<span class="line"><span>					reject(r)</span></span>
<span class="line"><span>				})</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				resolve(data);</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 添加 reject 方法</span></span>
<span class="line"><span>	static reject(reason) {</span></span>
<span class="line"><span>		return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>			reject(reason)</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 添加 all 方法</span></span>
<span class="line"><span>	static all(promises) {</span></span>
<span class="line"><span>		return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>			let count = 0;</span></span>
<span class="line"><span>			let arr = [];</span></span>
<span class="line"><span>			for (let i = 0; i &lt; promises.length; i++) {</span></span>
<span class="line"><span>				promises[i].then(v =&gt; {</span></span>
<span class="line"><span>					count++;</span></span>
<span class="line"><span>					arr[i] = v;</span></span>
<span class="line"><span>					if (count === promises.length) {</span></span>
<span class="line"><span>						resolve(arr);</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}, r =&gt; {</span></span>
<span class="line"><span>					reject(r);</span></span>
<span class="line"><span>				})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 添加 race 方法</span></span>
<span class="line"><span>	static race(promises) {</span></span>
<span class="line"><span>		return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>			for (let i = 0; i &lt; promises.length; i++) {</span></span>
<span class="line"><span>				promises[i].then(v =&gt; {</span></span>
<span class="line"><span>					resolve(v);</span></span>
<span class="line"><span>				}, r =&gt; {</span></span>
<span class="line"><span>					reject(r);</span></span>
<span class="line"><span>				})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,2),l=[e];function i(c,r,o,m,u,f){return a(),n("div",null,l)}const v=s(p,[["render",i]]);export{d as __pageData,v as default};
