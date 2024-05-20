vue生命周期
```
1.生命周期就是vue实例从创建到销毁的整个过程
2.在整个生命周期过程中间会有函数被自动调用，这些函数叫做生命周期函数
3.生命周期函数：
	a.'创建'    beforeCreate    created（可以操作data中的数据）
		i.问题：beforeCreate和created中间做了哪些事情
		ii.答案：
			1.实现数据代理：把data中的属性挂载到vm实例上，可以直接通过this访问。（vm实例上还添加$date对象）
			2.实现响应式
		iii.vue2源码：    
	b.'挂载'    beforeMount    mounted
		i.created没有this.$el
		ii.beforeMount中this.$el是编译前div
		iii.mounted中可以dom操作
		iv.注意：this.$el 可以不指定，但需要指定this.template，且需要手动调用this.$mount('#app')挂载
		v.问题： beforeMount和mounted 之间做了什么事情
		vi.答案：调用render函数执行模板编译
	c.'更新'    beforeUpdate    updated
	d.'销毁'    beforeDestroy    destroyed
```
```
 'ue2'
    '创建'    beforeCreate    created 
    '挂载'    beforeMount    mounted
    '更新'    beforeUpdate    updated
    '销毁'    beforeDestroy    destroyed
 'Vue3'
    '创建'    setup函数
    '挂载'    onBeforeMount    onMounted
    '更新'    onBeforeUpdate    onUpdated
    '卸载'    onBeforeUnmounte    onUnmounted
```


插槽
1.slot：实现组件的复用，可以在组建中标签中的代码传入子组件中使用
2.具名slot：使用多个插槽，需要给不同插槽起名
3.作用域slot：父组件的模板渲染中间，需要用到子组件中的数据状态
// 父组件
```
<son #cpu="prop">
    <button v-show="prop.show">子组件控制</button>
</son>

// 子组件

<slot name="cpu" v-show="isShow"></slot>
```
备注：插槽的本质是一个对象，键为插槽名称，值为一个函数，模板编译时调用函数，返回一个虚拟dom的节点




Proxy
1.响应式是一个过程，存在触发者和响应者
2.数据的改变，触发关联的副作用函数响应（重新执行）
3.通过Proxy代理源数据
4.在Proxy中的自定义set操作中，重新执行副作用函数

es6的Proxy代理一个需要做响应式的对象，


声明式渲染
响应性
渐进式框架
单文件组件
组件名字插件
```
<script name="App"><script/>
```
// 本地插件
toRefs / toRef
```
toRefs('reactive对象') = {name: 'ObjectRefImpl', age: 'ObjectRefImpl'}
toRef(person, 'age') = 'ObjectRefImpl'
```
computed
```
'计算属性也是一个ref  ComputedRefImpl{}'
let fullName = computed({
    get() { return xxx },
    set(val) {}
})
```
watch / watchEffect
```
'监视四种数据'
1. ref 定义的数据
2. reactive 定义的数据（默认开启深度监视）
3. gatter函数：ref / reactive 对象的某个值（基本类型：使用gatter函数；函数：直接写）
4. 数组：数据源组成的数组
'配置对象'
{deep: '深度监控', immediate: '立即执行'}
'解除监控'
const fn = watch();  >>>  fn();
```
标签的ref属性
```
1. html：标签
2. 自定义组件：实例    暴露数据： defineExpose({a,b,c})
```
TS
```
// 定义一个接口，用于限制person对象具体属性
export interface PersonInter {
  id: string,
  name: string,
  age: number,
}
// 一个自定义类型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[]
——————————————————————————————————————————————————————
import { withDefaults } from 'vue';
import {type Persons} from '@/types';
withDefaults(defineProps<{list?: Persons}>(), {
  list: () => [{id: 'erfdfgdsg04', name: '张三', age: 18}]
});
——————————————————————————————————————————
let persons = reactive<Persons>([
  {id: 'erfdfgdsg01', name: '张三', age: 18}
])
// 事件对象断言
@input = "xxx = (<HTMLInputElement>$event.target).value"
// 循环对象
function getAllChild(refs:{[key:string]:any}) {}
```
自定义Hooks
useHooks.js
路由
```
<router-link :to="{path: '/xxx', query={ }}" axtive-class="xxx">xxx</router-link>
<router-link :to="{name: 'xxx', query={ }}" >xxx</router-link>
<router-view><router-view/>
'路由模式'：
1. history模式    2. hash模式
'路由组件props参数'
1. props: true    2. params(route) { return route.query} 
'replace'
<router-link replace ></>
'编程式路由导航'
```
pinia    集中式数据管理
```
'修改数据'
1. 直接修改    xxxStore.xxx = xxx
2. 批量修改    xxxStore.$patch({xxx: xxx})
3. actions    
'storeToRefs'
const {xxx} = storeToRefs(store)
'getters'
getters: {
    bigSum: state => state.sum * 10,
    upperSchool():string { return this.school * 10 }
}
'$subscribe'    '订阅/监听'
Store.$subscribe((mutate, state) => {
    console.log(mutate, state)
})
```
组件通信
```
1. 'props'
2. '$event'
    1. 原生事件，$event是事件对象（$event.target）
    2. 自定义组件的事件，$event是触发时，所传递的数据
3. '全局事件总线 mitt'
'mitt'    emitter.ts
    1. emitter.on()
    2. emitter.emit()
'v-model'
    1. :modelValue="xxx"
    2. @update:modelValue="xxx = $event"
    改名：
    v-model:xxx="xxx"
'$attrs'
'$refs'    所有子组件的实例    ----'defineExpose()'    
'$parent'    获取父组件实例
'provide() inject()'
```
slot 插槽
```
'默认插槽'
'具名插槽'
<template #xxx="parmas"> 111 </template>
<template #xxx="params"> 111 </template>
<slot name="xxx" :data="data"></slot>
```
其他api
```
'浅层次响应式 提高性能'
1. 'shallowRef'
2. 'shallowReactive'

'只读响应式对象'
1. 'readonly'    //'深只读副本'
2. 'shallowReadonly'    //'浅层只读副本'

'原始对象'
1. 'toRaw'    // 获取一个响应式对象的原始对象
2. 'markRaw'    // 标记一个原始对象，使其永远不会变成响应式   

'自定义ref（customRef）'
let initValue;
let msg = customRef((track,trigger) => {
    return {
        get() {
            track();    //跟踪--告诉vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新页面
            return    initValue;                    
        },
        set(value) {
            initValue = value;
            trigger();    //触发--通知bue一下数据msg变化了               
        } 
    }
})
```
Vue3新组件
```
'Teleport' // 传送门
<teleport to="body"></teleport>

'Suspense'    // 异步任务组件

'全局API转移到应用对象'
    1. app.component    // 全局组件
    2. app.config        // 全局属性
    3. app.directive    // 注册全局指令
    4. app.mount        // 挂载
    5. app.unmount        // 卸载
    6. app.use            // 挂载插件
```
兼容性
```
'全局API'
    1. 应用实例
    2. Tree Shaking打包时移除未使用的代码
'模板指令'
    1. 'v-model'    
        1. 默认名称已更改
        2. 移除.sync
        3. 可绑定多个v-model
        4. v-model可添加自定义修饰符
    2. 'key 使用改变'
        1. template 组件可是使用key
    3. 'v-if 与 v-for 优先级，f-if优先'
    4. 'v-bind 合并行为'
    5. 'v-on.native移除'
'移除过滤器'
```