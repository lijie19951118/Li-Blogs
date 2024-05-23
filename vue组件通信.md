# 1. props

父给子提供单项数据

# 2. 自定义事件（custom event）

子给父提供自定义事件

1.  原生DOM

    1.  原生DOM事件（\$event 接受实例对象）
2.  自定义组件

    1.  原生DOM事件：&#x9;

        1.  vue2中是自定义事件（可以通过.native修饰符变为原生DOM事件）
        2.  vue3中是原生DOM事件
    2.  自定义事件：

        1.  vue2：this.\$emit()
        2.  vue3：defineProps() 函数触发。定义的事件是自定义事件，未定义的为原生DOM事件

# 3. 全局事件总线（event bus）

插件：mitt，轻量级发布订阅模式数据通信

# 4. v-model

1.  原生input等标签上：数据实时同步获取
2.  自定义组件中：父子组件中数据相互同步绑定

    1.  给子组件传递props\[modelValue]
    2.  子组件绑定自定义事件：update\:modelValue

        ***
    3.  \==vue3中可以绑定多个 v-model: pageSize = "pageSize"==
    4.  vue2中modelValue === value，update\:modelValue = update\:value

***

# 5. useAttrs

能够接收父组件中所有传入的props属性和方法

```javascript
<script setup>
import { useAttrs } from 'vue'
const $attrs = useAttrs()
</script>
```

**`注意：`**`使用 definePropps(['xxx']) 函数接收了参数，$attrs就接收不到了`

**`与vue2区别：`**`vue3中事件也能接收到`

# 6. ref 和 \$parent

ref：可以获取真实的DOM节点，可以获取到子组件实例VC

\$parent：子组件内部获得父组件的实例

`注意：`默认对外关闭数据，如果想让外部访问，需要用defineExpose

```javascript
defineExpose({
	xxx
})
```

# 7. provide 和 inject

provide(提供)

&#x9;参数一：key

&#x9;参数二：响应式数据

inject(注入)

&#x9;参数：key

提供数据为引用类型，可以修改

# 8. pinia

缺点：存储数据不能持久化

vuex：集中式管理状态容器，可以实现组件之间任意通信

核心概念：state、mutations、actions、getters、modules

pinia：集中式管理状态容器，可以实现组件之间任意通信

核心概念：state、actions、getters

```javascript
// 大仓库
import { createPinia } from 'pinia';
const store = createPinia();
export default store;
```

```javascript
// 小仓库（组合式写法）
import { defineStore } from 'pinia';
const { ref, computed } from 'vue';
const useTodoStore = defineStore('todo', () => {
	let todos = ref([123]);
	let arr = ref([1,2,3,4,5]);
	let total = computed(() => {
		return arr.value.reduce((all, next) => {
			return all + next
		}, 0);
	})
	// 返回一个对象，对象的属性和方法可以提供给组件使用
	return {
		todos,
		total,
		updateTodo() {
			todos.value.push(111)
		}
	}
})
export default useTodoStore;
```

```javascript
// 小仓库（选项式写法）
import {defineStore} from 'pinia'
const userInfoStore = defineStore('info', {
	state: () => {
		return {
			count: 99,
			arr: [1,2,3,5,6,7,8,4,5]
		}
	},
	actions: {
		// 没有上下文对象
		setCount() {
			this.count ++ 
		}
	},
	getters: {
		total() {
			let result = this.arr.reduce((all, next) => {
				return all + next
			}, 0);
			return result;
		}
	}
})
export default useInfoStore
```

&#x9;

```javascript
// 使用
let infoStore = useInfoStore()

// 修改数据
infoStore.$patch({})
```

# 9. slot

默认插槽

```html
// 父组件
<Son>
	<div>填充到子组件插槽中</div>
</Son>

// 子组件
<div>
	子组件中slot插槽被父组件替换
	<slot></slot>
</div>
```

具名插槽

```html
// 父组件
<Son>
	<template #a>
		<div>填充到插槽a中</div>
	</template>
	<template #b>
		<div>填充到插槽b中</div>
	</template>
</Son>

// 子组件
<div>
	<slot name="a"></slot>
	<slot name="b"></slot>
</div>
```

作用域插槽：可以传递数据的插槽，子组件可以将数据回传给父组件，父组件可以决定这些回传的数据

