import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.DFrfdyhf.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue.md","filePath":"vue.md"}'),e={name:"vue.md"},l=p(`<p>vue生命周期</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.生命周期就是vue实例从创建到销毁的整个过程</span></span>
<span class="line"><span>2.在整个生命周期过程中间会有函数被自动调用，这些函数叫做生命周期函数</span></span>
<span class="line"><span>3.生命周期函数：</span></span>
<span class="line"><span>	a.&#39;创建&#39;    beforeCreate    created（可以操作data中的数据）</span></span>
<span class="line"><span>		i.问题：beforeCreate和created中间做了哪些事情</span></span>
<span class="line"><span>		ii.答案：</span></span>
<span class="line"><span>			1.实现数据代理：把data中的属性挂载到vm实例上，可以直接通过this访问。（vm实例上还添加$date对象）</span></span>
<span class="line"><span>			2.实现响应式</span></span>
<span class="line"><span>		iii.vue2源码：    </span></span>
<span class="line"><span>	b.&#39;挂载&#39;    beforeMount    mounted</span></span>
<span class="line"><span>		i.created没有this.$el</span></span>
<span class="line"><span>		ii.beforeMount中this.$el是编译前div</span></span>
<span class="line"><span>		iii.mounted中可以dom操作</span></span>
<span class="line"><span>		iv.注意：this.$el 可以不指定，但需要指定this.template，且需要手动调用this.$mount(&#39;#app&#39;)挂载</span></span>
<span class="line"><span>		v.问题： beforeMount和mounted 之间做了什么事情</span></span>
<span class="line"><span>		vi.答案：调用render函数执行模板编译</span></span>
<span class="line"><span>	c.&#39;更新&#39;    beforeUpdate    updated</span></span>
<span class="line"><span>	d.&#39;销毁&#39;    beforeDestroy    destroyed</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> &#39;ue2&#39;</span></span>
<span class="line"><span>    &#39;创建&#39;    beforeCreate    created </span></span>
<span class="line"><span>    &#39;挂载&#39;    beforeMount    mounted</span></span>
<span class="line"><span>    &#39;更新&#39;    beforeUpdate    updated</span></span>
<span class="line"><span>    &#39;销毁&#39;    beforeDestroy    destroyed</span></span>
<span class="line"><span> &#39;Vue3&#39;</span></span>
<span class="line"><span>    &#39;创建&#39;    setup函数</span></span>
<span class="line"><span>    &#39;挂载&#39;    onBeforeMount    onMounted</span></span>
<span class="line"><span>    &#39;更新&#39;    onBeforeUpdate    onUpdated</span></span>
<span class="line"><span>    &#39;卸载&#39;    onBeforeUnmounte    onUnmounted</span></span></code></pre></div><p>插槽 1.slot：实现组件的复用，可以在组建中标签中的代码传入子组件中使用 2.具名slot：使用多个插槽，需要给不同插槽起名 3.作用域slot：父组件的模板渲染中间，需要用到子组件中的数据状态 // 父组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;son #cpu=&quot;prop&quot;&gt;</span></span>
<span class="line"><span>    &lt;button v-show=&quot;prop.show&quot;&gt;子组件控制&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/son&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 子组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;slot name=&quot;cpu&quot; v-show=&quot;isShow&quot;&gt;&lt;/slot&gt;</span></span></code></pre></div><p>备注：插槽的本质是一个对象，键为插槽名称，值为一个函数，模板编译时调用函数，返回一个虚拟dom的节点</p><p>Proxy 1.响应式是一个过程，存在触发者和响应者 2.数据的改变，触发关联的副作用函数响应（重新执行） 3.通过Proxy代理源数据 4.在Proxy中的自定义set操作中，重新执行副作用函数</p><p>es6的Proxy代理一个需要做响应式的对象，</p><p>声明式渲染 响应性 渐进式框架 单文件组件 组件名字插件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script name=&quot;App&quot;&gt;&lt;script/&gt;</span></span></code></pre></div><p>// 本地插件 toRefs / toRef</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>toRefs(&#39;reactive对象&#39;) = {name: &#39;ObjectRefImpl&#39;, age: &#39;ObjectRefImpl&#39;}</span></span>
<span class="line"><span>toRef(person, &#39;age&#39;) = &#39;ObjectRefImpl&#39;</span></span></code></pre></div><p>computed</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;计算属性也是一个ref  ComputedRefImpl{}&#39;</span></span>
<span class="line"><span>let fullName = computed({</span></span>
<span class="line"><span>    get() { return xxx },</span></span>
<span class="line"><span>    set(val) {}</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>watch / watchEffect</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;监视四种数据&#39;</span></span>
<span class="line"><span>1. ref 定义的数据</span></span>
<span class="line"><span>2. reactive 定义的数据（默认开启深度监视）</span></span>
<span class="line"><span>3. gatter函数：ref / reactive 对象的某个值（基本类型：使用gatter函数；函数：直接写）</span></span>
<span class="line"><span>4. 数组：数据源组成的数组</span></span>
<span class="line"><span>&#39;配置对象&#39;</span></span>
<span class="line"><span>{deep: &#39;深度监控&#39;, immediate: &#39;立即执行&#39;}</span></span>
<span class="line"><span>&#39;解除监控&#39;</span></span>
<span class="line"><span>const fn = watch();  &gt;&gt;&gt;  fn();</span></span></code></pre></div><p>标签的ref属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. html：标签</span></span>
<span class="line"><span>2. 自定义组件：实例    暴露数据： defineExpose({a,b,c})</span></span></code></pre></div><p>TS</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义一个接口，用于限制person对象具体属性</span></span>
<span class="line"><span>export interface PersonInter {</span></span>
<span class="line"><span>  id: string,</span></span>
<span class="line"><span>  name: string,</span></span>
<span class="line"><span>  age: number,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 一个自定义类型</span></span>
<span class="line"><span>// export type Persons = Array&lt;PersonInter&gt;</span></span>
<span class="line"><span>export type Persons = PersonInter[]</span></span>
<span class="line"><span>——————————————————————————————————————————————————————</span></span>
<span class="line"><span>import { withDefaults } from &#39;vue&#39;;</span></span>
<span class="line"><span>import {type Persons} from &#39;@/types&#39;;</span></span>
<span class="line"><span>withDefaults(defineProps&lt;{list?: Persons}&gt;(), {</span></span>
<span class="line"><span>  list: () =&gt; [{id: &#39;erfdfgdsg04&#39;, name: &#39;张三&#39;, age: 18}]</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>——————————————————————————————————————————</span></span>
<span class="line"><span>let persons = reactive&lt;Persons&gt;([</span></span>
<span class="line"><span>  {id: &#39;erfdfgdsg01&#39;, name: &#39;张三&#39;, age: 18}</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>// 事件对象断言</span></span>
<span class="line"><span>@input = &quot;xxx = (&lt;HTMLInputElement&gt;$event.target).value&quot;</span></span>
<span class="line"><span>// 循环对象</span></span>
<span class="line"><span>function getAllChild(refs:{[key:string]:any}) {}</span></span></code></pre></div><p>自定义Hooks useHooks.js 路由</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;router-link :to=&quot;{path: &#39;/xxx&#39;, query={ }}&quot; axtive-class=&quot;xxx&quot;&gt;xxx&lt;/router-link&gt;</span></span>
<span class="line"><span>&lt;router-link :to=&quot;{name: &#39;xxx&#39;, query={ }}&quot; &gt;xxx&lt;/router-link&gt;</span></span>
<span class="line"><span>&lt;router-view&gt;&lt;router-view/&gt;</span></span>
<span class="line"><span>&#39;路由模式&#39;：</span></span>
<span class="line"><span>1. history模式    2. hash模式</span></span>
<span class="line"><span>&#39;路由组件props参数&#39;</span></span>
<span class="line"><span>1. props: true    2. params(route) { return route.query} </span></span>
<span class="line"><span>&#39;replace&#39;</span></span>
<span class="line"><span>&lt;router-link replace &gt;&lt;/&gt;</span></span>
<span class="line"><span>&#39;编程式路由导航&#39;</span></span></code></pre></div><p>pinia 集中式数据管理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;修改数据&#39;</span></span>
<span class="line"><span>1. 直接修改    xxxStore.xxx = xxx</span></span>
<span class="line"><span>2. 批量修改    xxxStore.$patch({xxx: xxx})</span></span>
<span class="line"><span>3. actions    </span></span>
<span class="line"><span>&#39;storeToRefs&#39;</span></span>
<span class="line"><span>const {xxx} = storeToRefs(store)</span></span>
<span class="line"><span>&#39;getters&#39;</span></span>
<span class="line"><span>getters: {</span></span>
<span class="line"><span>    bigSum: state =&gt; state.sum * 10,</span></span>
<span class="line"><span>    upperSchool():string { return this.school * 10 }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&#39;$subscribe&#39;    &#39;订阅/监听&#39;</span></span>
<span class="line"><span>Store.$subscribe((mutate, state) =&gt; {</span></span>
<span class="line"><span>    console.log(mutate, state)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>组件通信</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. &#39;props&#39;</span></span>
<span class="line"><span>2. &#39;$event&#39;</span></span>
<span class="line"><span>    1. 原生事件，$event是事件对象（$event.target）</span></span>
<span class="line"><span>    2. 自定义组件的事件，$event是触发时，所传递的数据</span></span>
<span class="line"><span>3. &#39;全局事件总线 mitt&#39;</span></span>
<span class="line"><span>&#39;mitt&#39;    emitter.ts</span></span>
<span class="line"><span>    1. emitter.on()</span></span>
<span class="line"><span>    2. emitter.emit()</span></span>
<span class="line"><span>&#39;v-model&#39;</span></span>
<span class="line"><span>    1. :modelValue=&quot;xxx&quot;</span></span>
<span class="line"><span>    2. @update:modelValue=&quot;xxx = $event&quot;</span></span>
<span class="line"><span>    改名：</span></span>
<span class="line"><span>    v-model:xxx=&quot;xxx&quot;</span></span>
<span class="line"><span>&#39;$attrs&#39;</span></span>
<span class="line"><span>&#39;$refs&#39;    所有子组件的实例    ----&#39;defineExpose()&#39;    </span></span>
<span class="line"><span>&#39;$parent&#39;    获取父组件实例</span></span>
<span class="line"><span>&#39;provide() inject()&#39;</span></span></code></pre></div><p>slot 插槽</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;默认插槽&#39;</span></span>
<span class="line"><span>&#39;具名插槽&#39;</span></span>
<span class="line"><span>&lt;template #xxx=&quot;parmas&quot;&gt; 111 &lt;/template&gt;</span></span>
<span class="line"><span>&lt;template #xxx=&quot;params&quot;&gt; 111 &lt;/template&gt;</span></span>
<span class="line"><span>&lt;slot name=&quot;xxx&quot; :data=&quot;data&quot;&gt;&lt;/slot&gt;</span></span></code></pre></div><p>其他api</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;浅层次响应式 提高性能&#39;</span></span>
<span class="line"><span>1. &#39;shallowRef&#39;</span></span>
<span class="line"><span>2. &#39;shallowReactive&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;只读响应式对象&#39;</span></span>
<span class="line"><span>1. &#39;readonly&#39;    //&#39;深只读副本&#39;</span></span>
<span class="line"><span>2. &#39;shallowReadonly&#39;    //&#39;浅层只读副本&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;原始对象&#39;</span></span>
<span class="line"><span>1. &#39;toRaw&#39;    // 获取一个响应式对象的原始对象</span></span>
<span class="line"><span>2. &#39;markRaw&#39;    // 标记一个原始对象，使其永远不会变成响应式   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;自定义ref（customRef）&#39;</span></span>
<span class="line"><span>let initValue;</span></span>
<span class="line"><span>let msg = customRef((track,trigger) =&gt; {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        get() {</span></span>
<span class="line"><span>            track();    //跟踪--告诉vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新页面</span></span>
<span class="line"><span>            return    initValue;                    </span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        set(value) {</span></span>
<span class="line"><span>            initValue = value;</span></span>
<span class="line"><span>            trigger();    //触发--通知bue一下数据msg变化了               </span></span>
<span class="line"><span>        } </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>Vue3新组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;Teleport&#39; // 传送门</span></span>
<span class="line"><span>&lt;teleport to=&quot;body&quot;&gt;&lt;/teleport&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;Suspense&#39;    // 异步任务组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;全局API转移到应用对象&#39;</span></span>
<span class="line"><span>    1. app.component    // 全局组件</span></span>
<span class="line"><span>    2. app.config        // 全局属性</span></span>
<span class="line"><span>    3. app.directive    // 注册全局指令</span></span>
<span class="line"><span>    4. app.mount        // 挂载</span></span>
<span class="line"><span>    5. app.unmount        // 卸载</span></span>
<span class="line"><span>    6. app.use            // 挂载插件</span></span></code></pre></div><p>兼容性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;全局API&#39;</span></span>
<span class="line"><span>    1. 应用实例</span></span>
<span class="line"><span>    2. Tree Shaking打包时移除未使用的代码</span></span>
<span class="line"><span>&#39;模板指令&#39;</span></span>
<span class="line"><span>    1. &#39;v-model&#39;    </span></span>
<span class="line"><span>        1. 默认名称已更改</span></span>
<span class="line"><span>        2. 移除.sync</span></span>
<span class="line"><span>        3. 可绑定多个v-model</span></span>
<span class="line"><span>        4. v-model可添加自定义修饰符</span></span>
<span class="line"><span>    2. &#39;key 使用改变&#39;</span></span>
<span class="line"><span>        1. template 组件可是使用key</span></span>
<span class="line"><span>    3. &#39;v-if 与 v-for 优先级，f-if优先&#39;</span></span>
<span class="line"><span>    4. &#39;v-bind 合并行为&#39;</span></span>
<span class="line"><span>    5. &#39;v-on.native移除&#39;</span></span>
<span class="line"><span>&#39;移除过滤器&#39;</span></span></code></pre></div>`,34),t=[l];function i(c,o,r,d,u,g){return a(),n("div",null,t)}const m=s(e,[["render",i]]);export{v as __pageData,m as default};
