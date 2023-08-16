### 1. v-if 和 v-show 的区别

- **手段**：v-if 是动态的向 DOM 树内添加或者删除 DOM 元素；v-show 是通过设置 DOM 元素的 display 样式属性控制显隐；

- **编译过程**：v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show 只是简单的基于 css 切换；
- **编译条件**：v-if 是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译; v-show 是在任何条件下，无论首次条件是否为真，都被编译，然后被缓存，而且 DOM 元素保留；
- **性能消耗**：v-if 有更高的切换消耗；v-show 有更高的初始渲染消耗；
- **使用场景**：v-if 适合运营条件不大可能改变；v-show 适合频繁切换

实际开发中，显示状态变化频繁的情况下应该使用 v-show，以保持树的稳定；显示状态变化较少的时候应该用 v-if,减少树的节点和渲染量

### 2. 谈谈对 mvvm 的理解

- MVVM 是 Model-View-ViewModel 的缩写。MVVM 是一种设计思想

- model 层：代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑

- View 代表 UI 组件，它负责将数据模型转换为 UI 展现出来，View 是一个同步 View 和 Model 的对象
- 在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互是双向的，因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会反应到 view 上
- 对 ViewModel 通过双向数据绑定把 VIew 和 Model 层连接起来，而 View 和 Model 之间的同步工作是完全自动的，无需人为干涉，因此开发者只需要关注业务层逻辑，不需要手动操作 DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

### 3. v-for 中的 key 值的作用是什么？

key 属性是 DOM 元素的唯一标识

作用：

- 提高虚拟 DOM 的更新
- 若不设置 key，可能会触发一些 bug
- 为了触发过度效果

### 4. vue 生命周期

- 创建
  - beforeCreat：这个阶段属性和方法都不能使用
  - created：这是实例创建完成之后，在这里完成了数据检测，可以使用数据，修改数据，不会触发 updated，也不会更新视图
- 挂载

  - beforMount：完成了模版的编译，虚拟 dom 也完成了创建，即将渲染，修改数据，不会触发 updated,也不会更新视图
  - Mounted：把编译好的模版挂载到页面上，这里可以发送异步请求，也可以访问 dom 节点

- 更新
  - beforUpdate：组件数据更新之前使用，数据是新的，页面上的数据是旧的，组件即将更新，准备渲染，可以改数据
  - updated：render 重新做了渲染，这时数据和页面都是新的，避免在此更新数据
- 销毁
  - beforDestroy：实例销毁前，在这里实例还可以用，可以清除定时器...
  - destroyed：组件已经被销毁，全部销毁
- 使用了 keep-alive 时多出的两个周期
  - activited：组件激活时
  - deactivited：组件被销毁时

### 5. 在 create 和 mouted 去请求数据，有什么区别？

create：初始化数据，然后渲染。渲染前做的一些事

mouted：在模板渲染完成后，一般都是初始化页面后，在对元素节点进行操作

若请求数据对 dom 有影响，用 create

若请求数据对 dom 无关，可以放在 mounted

### 6. vue 中常用的修饰符有哪些

- 事件修饰符
  - .stop（阻止冒泡） .prevent .capture .self .once（事件只会触发一次） .passive .native
- 按键修饰符
  - .keyup .keydown
- 系统修饰符
  - .ctrl .alt .meta
- 鼠标修饰符
  - .left .right .middle
- 表单修饰符
  - .lazy .trim（删除内容前后的空格） .number

### 7. vue 如何进行组件通信 \*\*\*

- 父传子
  - prop 父组件使用自定义属性，子组件使用 props
  - $ref 引用信息会注册到父组件的$ref 对象上
- 子传父
  - $emit 子组件绑定自定义事件，触发执行后，传给父组件，父组件要用事件监听接受参数
- 兄弟传值
  - new 一个新的 vue 实例，用 on 和 emit 来对数据进行传输
- vuex

### 8. keep-alive 是什么，怎么使用？\*\*\*

参考：https://blog.csdn.net/m0_59157023/article/details/131083995

Vue 的一个内置组件，包裹组件的时候，会缓存不活跃的组件实例，并不是销毁他们

作用：把组件切换的状态保存在内存里，防止重复渲染 DOM 节点，减少加载时间和性能消耗，提供用户体验

- `Vue`中提供了一个内置组件`keep-alive`，使用`<keep-alive>`元素将动态组件包裹起来，内部组件就会被缓存起来。
- `<keep-alive>`包裹的组件，加载过的页面，再次进入时，是不会执行页面第一次进入时的部分生命周期函数。
- `<keep-alive>`包裹的组件会新增两个生命周期函数`activated`和`deactivated`.

- 两个属性`include`和`exclude`可以让`<keep-alive>`实现有条件的进行缓存。`include`包含的组件会被进行缓存，`exclude`包含的组件不会被缓存

### 9. axios 是怎么封装的？

### 10. vue 路由是怎么传参的？ \*\*\*

params 传参

- 传参：this.$router.push({name: 'index', params: {id: idx}})
- 获取：this.$route.params.id

query 传参（可以解决页面刷新参数丢失的问题）

- 传参：this.$router.push({name: 'index', query: {id: idx}})
- 获取：this.$route.query.id

路由传参

- 路由配置：{path: '/index:id'}
- 传参：this.$router.push({name: '/index/${idx}'})

### 11. vue 路由的 hash 模式和 history 模式有什么区别

- hash 模式的路由后面跟一个 #，history 模式的路由没有；
- 回车刷新时，hash 模式会加载对应页面，history 不会；
- hash 模式支持低版本游览器，history 不支持，因为后者是 h5 新增的 API；
- hash 不会重新加载页面，单页面应用必备；
- history 有历史记录，H5 新增了 pushState 和 replaceState()去修改历史记录，并不会立刻发送请求；
- history 需要后台配置；

### 12. 路由拦截是怎么实现的 \*\*\*

响应拦截 axios 拦截：判断 token 是否过期

路由拦截：需要在路由配置中加一个字段

```js
{
    name: 'index',
    path: '/index',
    component: Index,
    meta: {
        requirtAuth: true
    }
}

router.berforEach((to, from next)=>{
    if(to.meta.requirtAuth) {
        if( store.satte.token) {
	  		next()
        } else {

        }
    }
})
```

### 13. 说一下动态路由 \*\*\*

要在路由配置里设置 mate 属性，扩展权限相关的字段，在路由导航守卫里通过判断这个权限标识，实现路由动态增加和跳转

根据用户登录的账号，返回用户的角色

前端再根据角色，和路由表的 meta.role 进行匹配

把匹配搭配的路由形成可以访问的路由

### 14. 如何解决刷新后二次加载路由？

- window.location.reload()
- macher

```js
const router = createdRouter()
export function resetRouter() {
  const newRouter = creatRouter()
  router.matcher = newRouter.matcher
}
```

### 15. vuex 刷新数据会丢失吗？怎么解决

vuex 肯定会重新获取数据，页面也会丢失数据

- 把数据保存到浏览器缓存中（cookie localstorage seesionstorage）
- 页面刷新的时候，再次请求数据，达到可以动态更新的方法
  - 监听浏览器的刷新时间，在刷新前把数据保存在 seesionstorage 里，刷新后请求数据，请求到了用 vuex，反之就用 sessionstorage 里的数据。

### 16. computed 和 watch 的区别

- computed 是计算属性，watch 是监听，监听的是 data 中数据的变化
- computed 支持缓存，相依赖的数据发生改变才会重新计算；watch 不支持缓存，只要监听的数据变化就会触发相应操作
- computed 不支持异步，当 computed 内有异步操作时是无法监听数据变化的；watch 支持异步操作、
- computed 属性的属性值是一函数，函数返回值为属性的属性值，computed 中每个属性都可以设置 set 与 get 方法。watch 监听的数据必须是 data 中声明过或父组件传递过来的 props 中的数据，当数据变化时，触发监听器。

### 16-1. computed 和 methods 的区别

computed 是个计算属性，本质上包括 getter，setter 方法

computed 中 getter 没有参数，setter 有一个参数

当获取计算属性时，实际上在调用计算属性的 getter 方法。vue 会收集属性的依赖，并缓存计算属性的返回结果，只有当依赖变化时才会重新计算

methods 没有缓存，每次调用都会重新执行

methods 方法可有多个参数

最重要的是含义上的区别：计算属性含义上就是个数据，可以读取，也可以赋值；而方法是个操作，用于处理一些事情。

### 17. vuex 的理解 \*\*\*

参考：https://blog.csdn.net/weixin_52834435/article/details/124522483

vuex 实现了一个单项数据流，在全局拥有一个 State 存放数据，当组件要更改 State 中的数据时，必须通过 Mutation 进行，Mutation 同时提供了订阅者模式供外部插件调用获取 State 数据的更新。而当所有异步操作（常见于调用后端接口异步获取更新数据）或批量的同步操作需要走 Action，但 Action 也是无法之直接修改 State 的，还是需要提交 Mutation 来修改 State 数据。最后，根据 State 的变化，渲染到视图上。

### 18. vue 的双向数据绑定原理？\*\*\*

参考：https://blog.csdn.net/muzidigbig/article/details/129790122

vuejs 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调来渲染视图。

具体步骤：

- 需要 observer(数据劫持)对数据对象进行递归遍历，包括子属性对象的属性，都加上 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调来渲染视图
- compiler（订阅者）解析模版指令，将模版中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦有数据变动，收到通知，更新视图
- Watch（观察者）是 Observer 和 Compiler 之间通信的桥梁，主要做的事：
  - 在自身实例化时往属性订阅器（dep）里面添加自己
  - 自身必须有个 update()方法
  - 待属性变动 dep.notice()通知时，能调用自身的 update()方法，并触发 Compile 中绑定的回调，则功成身退。
- MVVM 作为数据绑定的入口，整合 Observer、Compiler 和 Watch 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compiler 来解析编译模版指令，最终利用 Watcher 搭起 Observer 和 Compiler 之间的桥梁，达到数据变化->试图更新；视图交互变化(input)->数据 model 变更的双向绑定效果

### 19. diff 算法和虚拟 dom

虚拟 DOM，描述元素和元素之间的关系，创建一个 js 对象

如果组建内有响应的数据，数据发生变化的时候，render 函数会生成一个新的虚拟 DOM，这个新的虚拟 DOM 会和旧的虚拟 DOM 进行比对，找到需要修改的虚拟 DOM 内容，然后去对应的真实 DOM 中修改。

diff 算法就是虚拟 DOM 比对时用的一种算法，返回一个 patch 对象，这个对象的作用就是存储两个节点不同的地方，最后用 patch 里面记录的信息进行更新真实的 DOM

步骤：

- js 对象表示真实的 DOM 结构，要生成一个虚拟 DOM，再用虚拟 DOM 构建一个真实 DOM 树，渲染到页面
- 状态改变生成新的虚拟 DOM，根旧的虚拟 DOM 进行对比，这个对比算法就是 diff 算法，利用 patch 记录差异
- 把记录的差异用在第一个虚拟 DOM 生成的真实 DOM 上，视图就更新了

### 20. vuex 的响应式处理

vuex 是 vue 的状态管理工具

vue 中可以直接触发 methods 中的方法，vuex 是不可以的。为了处理异步，当触发事件的时候，会通过 dispatch 来访问 actions 中的方法，actions 中的 commit 会触发 mutations 中的方法，从而修改 State 里的值，通过 getter 把数据更新到视图

Vue.use(vuex)，调用 install 方法，通过 applyMixin(vue)在任意组件内执行 this.$store 就可以访问到 store 对象。vuex 的 state 是响应式的，借助的就是 vue 的 data，把 state 存到 vue 实践组件的 data 中

### 21. vue 中的一些循环方法

```js
arr.forEach((item, index)=>{console.log(index: item)}) // 普通的循环
arr.map((item)=>{return item + 1}) // 对元素的统一操作
arr.filter((item, index)=>{return item + 1}) // 返回符合条件的元素
arr.finindex((item, index)=>{return true}) // 返回符合条件的索引
arr.evening() // 遇到不符合的对象就会停止
arr.some() // 找到符合条件的元素就停止
```

### 22. 如何封装一个组件

使用 Vue.extend()创建一个组件

使用 Vue.components()方法注册组件

如果组件需要数据，可以在 props 中接收定义

子组件修改好数据，要把数据传递给父组件，可以用 emit()方法

原则：

​ 把功能拆开

​ 尽量让组件原子化，一个组件做一件事

​ 容器组件管理数据，展示组件管视图

### 23. 封装一个可复用组件，需要满足什么条件

- 低耦合，组件之间的依赖越小越好
- 最好从父级传入信息，不在公共组件中请求数据
- 传入数据要进行校验
- 处理事件的方法写在父组件中

### 24. vue 过滤器

vue 的特性，用来对文本格式化处理

使用它的两个地方，一个是插值表达式，一个是 v-bind

```js
// 全局过滤器
Vue.filter('add', function(v) {
    return v < 10 ? '0' + v : v
})
// 本地过滤器
// 和 method 同级
filter: {
    add: function(v) {
        return v < 10 ? '0' + v : v
    }
}
```

```html
<!-- 使用 -->
<div>{{number | add}}</div>
```

### 25. vue 中如何做强制刷新

- localtion.reload()
- this.$router.go(0)
- provide 和 inject

### 26. vue2,vue3 有什么区别

双向绑定的原理不同

是否支持碎片

API 不同

定义数据变量方法不同

生命周期不同

传值不同

指令和插槽不同

main.js 不同

vue3 相比 vue2 优化了哪些地方

- diff 算法的优化
- 静态提升
- 事件侦听缓存

### 27. vue 的性能优化怎么做 \*\*\*

编码优化

- 不要把所有数据放在 data 中
- v-for 时给每个元素绑定事件用事件代理
- key 值保持唯一
- keep-alive 缓存组件
- 尽可能的拆分组件，提高复用性，维护性
- 合理使用路由懒加载，异步组件
- 数据持久化存储的使用，尽量用防抖，节流优化

加载优化

- 按需加载
- 内容懒加载
- 图片懒加载

用户体验

- 骨架屏

SEO 优化

- 预渲染
- 服务器渲染 SSR

打包优化

- CDN 形式加载第三方模块
- 多线程打包
- 抽离公共组件

缓存和压缩

- 客户端缓存，服务器缓存
- 服务端 Gzip 压缩

### 28. 首屏优化

使用路由懒加载

非首屏组件可以使用异步加载

首屏不重要的组件进行延迟加载

静态资源放在 cdn 上

减少首屏上 js,css 等资源文件的大小

使用服务器渲染

减少 DOM 的数量和层数

使用精灵图请求

做一些 loading

开启 Gzip 压缩

图片懒加载

### 29. vue3 为什么使用 proxy

proxy 可以代理整个对象，defineproperty 只代理对象上的某个属性

proxy 对代理对象的监听更加丰富

proxy 代理对象会生成新的对象，不会修改被代理对象的本身

proxy 不兼容 ie 浏览器

### 30. nuxt.js \*\*\*

(学习一下)

是基于 Vue.js 的通用应用框架

SSR 服务端渲染。在服务端生成 html 发送给客户端

特性：异步加载数据，中间件支持，布局支持

优点：有利于 SEO，加载速度快，自动配置路由

依赖 node 和 npm npx(npx 在 npm 版本 5.2.0 默认安装)

SEO：优化搜索引擎

SPA 的应用不利于搜索引擎 SEO 的操作

### 31. 如何做 seo 优化

SSR

预渲染：prerender-spa-plugin
