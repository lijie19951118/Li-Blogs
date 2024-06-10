import{_ as s,c as a,o as n,a2 as e}from"./chunks/framework.DFrfdyhf.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"闭包.md","filePath":"闭包.md"}'),t={name:"闭包.md"},p=e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.形成：内部函数使用了外部函数的属性</span></span>
<span class="line"><span>2.保持：内部函数需要被返回到外部函数的外部，也就是被外部函数的外部引用，保持引用就不会被垃圾回收机制回收</span></span>
<span class="line"><span>3.作用：</span></span>
<span class="line"><span>	a.从外部访问函数内部的私有变量</span></span>
<span class="line"><span>	b.封装变量</span></span>
<span class="line"><span>	c.防止污染全局变量（立即执行函数）</span></span></code></pre></div>`,1),c=[p];function i(o,l,_,r,d,h){return n(),a("div",null,c)}const f=s(t,[["render",i]]);export{u as __pageData,f as default};
