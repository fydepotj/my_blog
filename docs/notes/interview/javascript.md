### 1. js 由哪三部分构成

ECMAScript + DOM + BOM

ECMAScript：js 的核心内容，描述了语言的基础语法。如 var let for 数据类型...

文档对象模型 DOM：DOM 把整个 HTML 页面规划为元素构成的文档

游览器对象模型 BOM：对游览器进行访问与操作。如一些弹窗

### 2. js 有哪些内置对象

String、boolean、Number、Array、Object、Function、Math、Date、RegExp...

Math：abs() sqrt() max() min()

Date: new Date() getYear()

Array

String：concat() slice() split() length

### 3. 操作数组的常用方法有哪些 \*\*\*

增加：push() unshift()

删除：pop() shift()

新增/删除：splice()

截取：slice()

反转：reverse()

排序：sort()

转文本：toString()

数组合并：concat()

分割字符串：join()

过滤：filter()

### 4. js 检测数据类型的方法 \*\*\*

typeof()：typeof xxx 缺点：引用类型不可用

instanceof()：xxx instanceof Array 缺点：基本数据类型不可用

constructor()：xxx.constrcutor === String 缺点：声明一个构造函数并把原型指向 Array,会判断失误

Object.prototype.toString.call：Object.prototype.toString.call(xxx) 完美解决方法

### 5. 闭包 \*\*\*

闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。

闭包有两个常用的用途；

- 闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。
- 闭包的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。

缺点：闭包较多时，会消耗内存，导致页面的性能下降，在 ie 浏览器中才会导致内存泄漏

使用场景：防抖，节流，函数嵌套函数避免全局污染的时候

比如，函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。

```javascript
function A() {
  let a = 1
  window.B = function () {
    console.log(a)
  }
}
A()
B() // 1
```

在 JS 中，闭包存在的意义就是让我们可以间接访问函数内部的变量。经典面试题：循环中使用闭包解决 var 定义函数的问题

```javascript
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
```

首先因为 `setTimeout` 是个异步函数，所以会先把循环全部执行完毕，这时候 `i` 就是 6 了，所以会输出一堆 6。解决办法有三种：

- 第一种是使用闭包的方式

```javascript
for (var i = 1; i <= 5; i++) {
  ;(function (j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}
```

在上述代码中，首先使用了立即执行函数将 `i` 传入函数内部，这个时候值就被固定在了参数 `j` 上面不会改变，当下次执行 `timer` 这个闭包的时候，就可以使用外部函数的变量 `j`，从而达到目的。

- 第二种就是使用 `setTimeout` 的第三个参数，这个参数会被当成 `timer` 函数的参数传入。

```javascript
for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j)
    },
    i * 1000,
    i
  )
}
```

- 第三种就是使用 `let` 定义 `i` 了来解决问题了，这个也是最为推荐的方式

```javascript
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
```

### 6. 前端的内存泄漏怎么理解

js 里已经分配内存地址的对象，但由于长时间没有释放或者没有被清除，造成长期占用内存的现象，导致内存资源的浪费最终导致运行速度变慢，甚至崩溃的情况。

js 有一个垃圾回收机制

导致内存泄漏的因素：未声明直接赋值的变量；未清空的定时器；过度的闭包；引用元素未被清除

### 7. 事件委托是什么

事件委托又叫事件代理，原理就是利用了事件冒泡的机制来实现的，也就是说把子元素的事件绑定到了父元素的身上

如果子元素阻止了事件冒泡，那么委托也就不成立

阻止事件冒泡：event.stopPropagation()

​ addEventlistenter('click', fun, true/false) ，默认 false-冒泡，true-事件捕获

好处：提高性能，减少事件的绑定，也就减少了内存的占用。

### 8. 数据类型有哪些 \*\*\*

基本数据类型：number，string，boolean，null，undefined，symbol

存放在栈内存中，一个具体的值

引用数据类型：function，Array，Object

存放在堆内存中，一个地址

两个引用类型数据同时指向同一个地址的时候，修改其中一个，另一个随之也会改变

### 9. 描述一下原型链

原型：每个函数都有 prototype 属性，也就是原型，也叫原型对象

- 原型可以放一些属性和方法，共享给实例对象使用
- 原型也可以做继承

原型链：每个对象都有**proto**属性，这个属性指向它的原型对象，原型对象也是对象，也有**proto**属性，指向原型对象的原型对象，这样一层层形成的链式结构称之为原型链，最顶层找不到则返回 null

![在这里插入图片描述](https://img-blog.csdnimg.cn/ff422e52ff0f49df80984d36ee01c719.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl81NjUwNTg0NQ==,size_16,color_FFFFFF,t_70#pic_center)

### 10. 如何实现一个 new,new 操作符具体做了什么 \*\*\*

- 新建一个空对象
- 把空对象和构造函数通过原型链进行链接
- 把构造函数上的 this 绑定到新的空对象身上
- 根据构造函数返回的类型判断，如果是值类型，返回创建对象；若是引用类型，返回引用类型对象

```js
function newFun(FunName, ...args) {
  let newObj = {}
  newObj.__proto__ = FunName.prototype
  const result = FunName.apply(newObj, args)
  return result instanceof Object ? result : newObj
}
function Person(name) {
  this.name = name
}
let fn1 = new Person('张三')
let fn2 = newFun(Person, '李四')
console.log(fn1)
console.log(fn2)
```

### 11. js 是如何实现继承的

- 原型链继承
- 借用构造函数继承
- 组合式继承
- es6 的 class 类继承

```js
class Animal {
  construtor(kind) {
    this.kind = kind
  }
  getkind() {
    return this.kind
  }
}
class Cat extends Animal {
  construtor(name) {
    super('cat')
    this.name = name
  }
  getCatInfo() {
    console.log(this.name + '：' + super.getkind())
  }
}
const cat1 = new Cat('buding')
cat1.getCatInfo() // buding：cat
```

### 12. js 的设计原理

js 引擎 运行上下文 调用栈 事件循环 回调

### 13. this 指向有哪几种 \*\*\*

- 默认绑定，this 指向全局 window
  - 全局函数，函数独立调用，自执行函数，闭包
- 隐试绑定（方法调用），谁调用 this 就指向谁。
  - 隐式绑定丢失：① 隐式绑定函数作为变量赋值 ② 隐式绑定的函数作为参数传递给函数 ③ 内置对象 setTimeout、setInterval 中
- 显示绑定（改变指向），通过使用 call,apply,bind 改变 this 指向
- new 绑定（构造函数实例化），对构造函数 new 一个实例，this 指向 new 的实例对象
- 箭头函数, 自身没有 this，看外层是否有函数，有就是外层函数的 this，若无，就是 window

### 14. js 中关于 async 和 defer 作用与区别

没有 async 和 defer，浏览器会立即加载指定脚本，加载完毕，再往下执行（同步）。会阻塞页面

async：加载脚本和渲染文档元素的过程同时进行（异步）

defer：同 async 一样，但是脚本的执行要在所有元素解析完成之后 DomContentLoaded 事件触发之前全部完成。

defer 和 async 的主要不同就是 defer 会保证脚本的顺序，async 不保证顺序

### 15. serTimeout 最小执行时间

html5 规定的：setTimeout - 4ms setInterval - 10ms

### 16. e5 和 e6 的区别

js = ECMAScript + Dom + Bom

e5：ECMAScript5，2009 年 ECMAScript 的第五次修订。ECMAScript2009

e6：ECMAScript6，2015 年 ECMAScript 的第六次修订。ECMAScript2015

### 17. E6 的新特性 \*\*\*

- 块级作用域（let，const）

  - 不存在变量提升
  - 存在暂时性死区
  - 不能重复声明
  - 先定义后赋值

- 定义类的的语法糖 - class

- symbol

  - 独一无二的值，不能与其他数据类型运算

- 解构赋值

- 模板字符串：`` ${}

- 对象和数组扩展运算符 ...

- 箭头函数

  - 内部没有 arguments,也没有 prototype 属性，所以不能用 new 关键字调用函数
  - 箭头函数与普通函数最大的区别在于其内部 this 永远指向父级对象的 this
  - 不能用 call,apply,bind 去改变 this 的执行

- Promise 和 proxy

  - Promise

    异步编程的一种解决方案，异步操作队列化

    是个构造函数，自身有 all，reject，resolve 等方法，原型上有 then，catch 等方法

    同步方式写异步代码，用来解决回调地狱问题

    提供统一的接口，使得控制异步操作更加容易

    三种状态：pending 初始状态 fulfilled 操作成功 rejected 操作失败

    async 和 await

    ​ 同步代码做异步的操作，两者必须搭配使用

    ​ async 表明函数有异步操作，调用函数会返回 promise

    ​ await 返回的结果若是 promise，那就是 promise 的结果；若是普通函数，可进行 then 链式操作

    ​ await 后的 promise 如果是 reject 状态，那么整个 async 函数都会中断，后面代码不执行

  - proxy

- 函数参数的默认值

- 数组新增的 api

  - []：includes() filter() forEach() find
  - {}：keys() values() entries()

- set 和 map

  - Set：后端的 Set 集合对象，存储的是一个数组，具有唯一性

    - 数组去重

    ```js
    let arr = [1, 1, 2, 3, 4]
    let mySet = new Set(arr)
    let newArr = Array.from(mySet)
    console.log(newArr)
    ```

  - Map：保存键值对，｛key: value｝。

    - 与对象不同的是：Object 的 key 只能是字符串或者 symbol 值，Map 可以是任何值
    - Map 对象中有个 size 属性，存储了键值对的个数，Object 没有类似属性

- 模块化（import，export）

### 18. call，apply，bind 三者的用法区别 \*\*\*

```js
// 用法：fn.call(thisArg, arg, arg2, arg3,...)
// 用法：fn.apply(thisArg, [arg1, arg2, arg3, ...])
// 用法：fn.bind(thisArg, arg1, arg2, arg3, ...)()
```

共同点：都可以改变 this 指向问题；第一个参数都是 this 要指向的对象；都可以传参

区别：call,apply 都是对函数直接调用，bind 是返回修改 this 指向的函数，需手动调用；call,bind 可传多个参数，依次传入，apply 只有两个参数，第二个是个数组

### 19. 递归函数

如果一个函数可以调用函数本身，那么这个函数就是递归函数

必须要求退出条件 return

### 20. 深拷贝浅拷贝，如何实现的 \*\*\*

深拷贝就是完全拷贝一份新的对象，会在堆内存中开辟出新的空间，拷贝对象修改后，愿对象不会受影响。主要针对的是引用数据类型

- 扩展运算符
  - 只能拷贝第一层数据，若是多层，则还是浅拷贝
- JSON.parse(JSON.stringify())
  - 不能拷贝内部方法
- 利用递归函数

```js
function deepCopy(obj, deep) {
  let newObj = {}
  if (obj instanceof Array) newObj = []
  for (let key in obj) {
    let value = obj[key]
    obj[key] =
      !deep && typeof value === 'object' && value !== null
        ? deepCopy(value, deep)
        : value
  }
  return obj
}
```

### 21. 事件循环

浏览器 js 异步执行原理

- js 是一个单线程的脚本语言，是因为执行 js 的引擎是单线程的，而浏览器本身是多线程的

- 浏览器主要含有：js 执行线程，定时器线程，http 请求线程，事件触发线程，GUI 线程...

- 异步请求的真正执行者是浏览器的其他线程

- js 引擎只是执行了异步操作成功后的回调函数

执行栈和任务队列

- 执行栈：用于按执行顺序存放同步代码；按序执行，执行完毕弹出执行栈；如果遇到异步操作，就交给其他线程处理，也就是挂起。
- 任务队列：用于按序排放异步操作执行结束后的回调函数；任务队列中的函数等待执行结束后取出执行

事件循环的本质

- 基于事件驱动模式；至少包含一个事件循环来判断当前任务队列是否有新任务；通过不断的循环，取出异步回调进行执行

宏任务和微任务

- 宏任务：有明确异步的任务，需要其他的异步线程支持。

- 微任务：没有明确的异步任务要执行，只有回调不需要其他异步线程支持。

执行顺序

- 先执行同步任务
- 再执行任务队列中的任务
  - 先微任务队列（只有一个） 如：promise.then，promise.catch，process.nextTic
  - 再宏任务队列 （可以多个） 如：渲染事件，用户交互事件，SetTimeout，SetInterval，网络请求，文件读写...
- 这样一个循环的往复就是事件循环
- async/await
  - async 隐式返回一个 Promise 作为结果的函数
  - await 会产生一个微任务。产生时机：执行完 await 之后，会直接跳出 async 函数，执行其他同步代码
  - 同步任务完毕之后，再回到 async 函数执行剩余代码，然后把 await 后面的代码注册到微任务队列中

定时器误差

- 执行顺序
  - 遇到一个定时器请求，开启定时器线程去计时
  - 计时结束后将回调函数放入任务队列中（宏任务）
  - 等待同步任务执行（waiting...）
  - 同步任务执行完毕先要取出任务中的回调函数（微任务）
  - 最后在执行定时器里面的请求
- 误差大小
  - 定时器的误差取决于同步任务的执行时间+微任务的执行时间
  - 同步任务执行时间越长，定时器误差就越大

### 22. 如何理解 js 的异步 \*\*\*

js 是一门单线程语言，这是因为它运行在游览器饿渲染主线程中，而渲染主线程只有一个。

而渲染主线程承担着诸多的工作，渲染页面，执行 css html js 等等，都在里面进行。

如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致页面无法及时更新，给用户造成卡死的现象。

所以浏览器采用异步的方式来避免。具体做法就是当某些任务发生时，比如，计时器，网络，事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他进程完成时，将事先传递的回调函数包装成任务，加入到消息队列末尾排队，等待主线程调度执行。

这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。

### 23. 阐述一下事件循环 \*\*\*

事件循环又叫消息循环，是浏览器渲染主线程的工作方式。

在 Chrome 中的源码中，它开启了一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加到队列末尾即可。

过去把消息队列简单分为宏队列和微队列。这种说法目前已经无法满足复杂的浏览器环境。取而代之的是一种更加灵活多变的处理方式、

根据 w3c 官方解释，每个任务有着不同的类型。同类型的任务必须在同一队列中，不同类型可以属于不同队列。不同队列有着不同优先级，在一次事件循环中，由游览器自行决定取哪一个队列的任务。但游览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。

（延时队列和交互队列同时完成时，浏览器会先执行交互队列）

单线程是异步产生的原因

事件循环是异步的实现方式

### 24. js 中的计时器能够做到精确计时吗 ？ 为啥 \*\*\*

不能。因为：

- 计算机硬件没有原子钟，无法做到精确计时
- 操作系统的计时函数本身就有少量偏差，由于 js 的计时器最终还是调用操作系统的函数，也就携带了这些偏差
- 按照 w3c 的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，则会带有 4ms 的最少时间，这样在计时时间小于 4ms 时又来了偏差。
- 受事件循环的影响，计时器的回调函数只能在主线程空闲的时候运行，因此带来了偏差。

### 25. ajax 是什么，怎么实现的

创建交互式网页应用的网页开发技术

​ 在不加载整个网页的前提下，与服务器交换数据并更新部分内容

通过 XmlHttpRequest 对象向服务器发送异步请求，然后从服务器拿到数据，最后通过 js 操作 dom 更新页面

```js
// 通过XmlHttpRequest对象 xml
// 通过xml对象里的open()方法和服务器链接
// 构建请求所需数据，并通过xml对象的send()发送给服务器
// 通过xml对象的onreadystate change事件监听服务器和你的通信状态
// 接收并处理服务器响应的数据结果
// 把处理的数据更新到html页面上
```

### 26. get 和 post 有什么区别

get 一般用来获取数据，post 一般用来提交数据；

get 参数会直接放在 url 上，所以安全性要差。post 参数是放在了 body 中；

get 请求刷新服务器或回退是没有影响的，post 请求退回时会重新提交数据；

get 请求会被缓存，post 不会；

get 请求会被保存到浏览器历史记录中，post 不会；

get 请求只能进行 url 编码，post 请求支持多种

### 27. Promise 和 async await 的区别 \*\*\*

Promise：

Promise 是 ES6 中的一个内置对象，实际是一个构造函数

特点：

- 三种状态：pending(进行中) resolved(已完成) rejected(已失败)，只有异步操作的结果可以决定当前是哪一种状态，任何其他的操作都不能改变这个状态

- 两种状态的转化：其一，从 pending（进行中）到 resolved（已完成）。其二，从 pending（进行中）到 rejected（已失败）。只有这两种形式的转变。

- Promise 构造函数的原型对象上，有 then()和 catch()等方法，then()第一个参数接收 resolved()传来的数据，catch()第一个参数接收 rejected()传来的数据

作用：

- 通常用来解决异步调用问题
- 解决多层回调嵌套的方案
- 提高代码可读性、更便于维护

用法：

```js
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.random() * 2
      if (num > 1) {
        resolve('成功数字：' + num)
      } else {
        reject('错误数字：' + num)
      }
    }, 2000)
  })
}
getNum()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
```

async/await：

- es8 的一个新特性；
- 写异步代码的新方式，类似与回调函数，Promise
- 基于 Promise 实现的，不能用于普通的回调函数
- 同 Promise 一样，也是非阻塞的
- 使异步代码看起来和同步代码，这正是它的魔力所在

用法：

```js
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.random() * 2
      if (num > 1) {
        resolve('成功数字：' + num)
      } else {
        reject('错误数字：' + num)
      }
    }, 2000)
  })
}
;(async () => {
  try {
    let num = await getNum()
    console.log(num)
  } catch (err) {
    console.log(err)
  }
})()
```

async/await 比 Promise 更优越的表现

- **简洁干净**：使用 async/await 能省去写多少行代码
- **错误处理**：async/wait 能用相同的结构和好用的经典 try/catch 处理同步和异步错误，错误堆栈能指出包含错误的函数。
- **调试**：async/await 的一个极大优势是它更容易调试，使用 async/await 则无需过多箭头函数，并且能像正常的同步调用一样直接跨过 await 调用。

### 28. 浏览器的存储方式 \*\*\*

- cookies
  - h5 标准前的本地存储方式
  - 兼容性好，请求头自带 cookies
  - 存储量小，资源浪费，使用麻烦（需封装）
- localstorage
  - h5 加入以键值对为标准的方式
  - 操作方便，永久存储（需手动清除），兼容性好
  - 保存值的类型被限定，浏览器在隐私模式下不可读取，不能被爬虫
- sessionstorage
  - 当前页面关闭后就会立刻清理，会话级别的存储方式
- indexDB
  - h5 标准的存储方式，以键值对进行存储，可以快速读取，适合 web 场景

### 29. token 的登陆流程 \*\*\*

- 客户端输入账号密码请求登录
- 服务端收到请求后，需要去验证账号密码
- 验证成功后，服务端会签发一个 token 给客户端
- 客户端收到 token 后需存储在本地，localstorage,cookie
- 客户端每次向服务器请求资源时，都需要携带此 token
- 服务端接收到请求后，会先去验证 token，验证成功后会返回客户端请求结果

### 30. 页面渲染的过程是怎样的

- DNS 解析
- 建立 tcp 连接
- 发送 http 请求
- 服务器处理请求
- 渲染页面：浏览器会获取 html,css 的资源，然后把 html 解析成 dom 树，再把 css 解析成 CSSOM，再把 DOM 和 CSSOM 合并为渲染树，然后布局，再把渲染树上的每个节点渲染到屏幕上（绘制）
- 断开 tcp 连接

### 31. DOM 树和渲染树有什么区别

- DOM 树是和 html 标签一一对应的，包括 head 和隐藏元素
- 渲染树不包含 head 和隐藏元素

### 32. 精灵图和 base64

- 精灵图：把多张小图整合到一张大图上，通过定位显示所需小图标，访问页面可减少请求，提高加载速度
- base64：传输 8bit 字节代码的编码方式，把原本的二进制形式转为 64 个字符的单位，最后组成字符串；会和 html,css 一起下载到浏览器中，减少请求，减少跨域问题，但是一些低版本不支持，若 base64 体积比原图大，不利于 css 的加载

### 33. svg 是什么

基于 XML 语法格式的图像格式，可缩放矢量图，其他图像是基于像素的，SVG 是属于对图像形状的描述，本质是文本文件，体积小，无论放大多少倍都不会失真

使用

```html
<svg></svg>
<img src="xxx.svg" />
<!--svg还可以转为base64-->
```

### 34. jwt 认证

JSON Web Token 通过 json 形式作为在 web 应用中的令牌，可以在各方之间安全的把信息作为 json 对象传输，信息传输，授权

jwt 认证流程

- 前端把账号密码发送给后端接口
- 后端核对账号密码成功后，会把用户 id 等其他信息作为 jwt 负载，把它和头部分别进行 base64 编码拼接后签名，形成一个 jwt(token)
- 前端每次请求时都会把 jwt 放在请求头的 Authorization 字段内
- 后端检查是否存在，如果存在就验证 jwt 的有效性，（签名是否正确，token 是否过期）
- 验证通过后后端使用 jwt 中包含的用户信息进行其他操作，并返回对应结果

特点：简洁、包含性、因为 token 是 json 加密的形式保存在客户端，所以 jwt 是跨语言的，原则上可以任何 web 形式都支持

### 35. npm 的底层环境是什么

node package manager 包管理和分发管理，已经成为分发 node 模块的标准，是 js 的运行环境

npm 的组成：网站、注册表、命令行工具

### 36. HTTP 协议规定的协议头和请求头有什么

请求头信息：

- Accept：告诉服务器所支持的数据类型
- Host：浏览器告诉服务器我想访问那台主机
- Referer：浏览器告诉服务器我从哪里来（防盗链）
- User-Agent：浏览器类型，版本类型
- Date：浏览器告诉服务器我是什么时候访问的
- Connection：连接方式
- Cookie
- X-Request-with：请求方式

响应头信息：

- Location：这个就是告诉浏览器你要去找谁
- Server：告诉浏览器服务器的类型
- Content-Type：告诉浏览器返回的数据类型
- Refresh：控制浏览器的一个定时刷新

### 37. 浏览器的缓存策略 \*\*\*

强缓存（本地缓存）、协商缓存（若缓存）

强缓：不发送请求，直接使用缓存里的内容，浏览器把 js,css,image,等存到内存中，下次用户访问直接从内存中取，提高性能

- 触发：HTTP1.0：时间戳响应标头 HTTP1.1：Cache-Control 响应标头

协缓：需要向后台发送请求，通过判断来决定是否使用协商缓存，如果请求内容无变化，则返回 304，浏览器就用缓存里的内容

- 触发：HTTP1.0：请求头 if-modified-since 响应头 last-modrfied HTTP1.1：请求头 if-none-math 响应头 Etag

### 38. 同源策略

http:// www. aaa.com:8080/index/vue.js

协议 子域名 主域名 端口号 资源

同源策略是浏览器的核心，如果没有这个策略就会受到网络攻击

协议+域名+端口号三者若有一个不一致，就是不同源，就会出现跨域

如何解决跨域：

- JSONP
- CORS
- websocket
- 反向代理

### 39. 防抖和节流 \*\*\*

- 函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
- 函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

防抖函数 - 应用场景

- 按钮提交场景：防⽌多次提交按钮，只执⾏最后提交的⼀次
- 服务端验证场景：表单验证需要服务端配合，只执⾏⼀段连续的输⼊事件的最后⼀次，还有搜索联想词功能类似⽣存环境请⽤ lodash.debounce

节流函数 - 适⽤场景：

- 拖拽场景：固定时间内只执⾏⼀次，防⽌超⾼频次触发位置变动
- 缩放场景：监控浏览器 resize
- 动画场景：避免短时间内多次触发动画引起性能问题

实现节流函数和防抖函数

- 防抖

```js
function debounce(fn, wait) {
  var timer = null

  return function () {
    var context = this,
      args = [...arguments]

    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
```

- 节流

```js
// 时间戳版
function throttle(fn, delay) {
  var preTime = Date.now()

  return function () {
    var context = this,
      args = [...arguments],
      nowTime = Date.now()

    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - preTime >= delay) {
      preTime = Date.now()
      return fn.apply(context, args)
    }
  }
}

// 定时器版
function throttle(fun, wait) {
  let timeout = null
  return function () {
    let context = this
    let args = [...arguments]
    if (!timeout) {
      timeout = setTimeout(() => {
        fun.apply(context, args)
        timeout = null
      }, wait)
    }
  }
}
```

### 40. 解释一下 json

json 是一种纯字符串形式的数据，它本身不提供任何方法，适合在网络中进行传输

json 数据存储在 .json 文件中，也可以吧 json 数据以字符串的形式保存在数据库、Cookie 中

js 提供了 JSON.parse() JSON.stringify()

定义接口；序列化；生成 token；配置文件 package.json 等 使用到 json

### 41. 当数据没有请求过来的时候，怎么办

- 可以在渲染数据的地方使用默认值
- if 语句进行判断显示隐藏

### 42. 无感登录是怎么实现的

- 在响应器中进行拦截，判断 token 返回过期后，调用刷新 token 的接口（常用）

  - 登录成功后保存 token 和 refresh_token
  - 在响应拦截器中对 401 状态码引入刷新 token 的 api 方法调用
  - 替换本地新的 token
  - 把错误对象里面的 token 替换
  - 再次发送未完成的请求
  - 如果 refresh_token 过期了，判断是否过期，过期了就清除所有的 token 重新登录

- 后端返回过期时间，前端判断 token 的过期时间，去调用刷新 token 的接口
- 写定时器，定时刷新 token

### 43. 大文件上传如何去做

- 分片上传
- 断点续传
