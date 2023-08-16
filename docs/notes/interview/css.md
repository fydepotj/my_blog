### 1、说一下 css 的盒模型

在 html 页面中的所有元素都可以看成一个盒子

盒子的组成：内容 content + 内边距 padding+边距 border+外边距 margin

两种类型：标准盒模型、ie 盒模型

标准盒模型：margin+border+padding+content

ie 盒模型：margin+content(border+padding)

控制盒模型模式的 css：border-sizing: content-box(默认，标准盒模型)、border-box(ie 盒模型)

### 2、css 选择器的优先级

css 的特性：继承性，层叠性，优先级

优先级：!important > 内联样式>id 选择>class/伪类/属性>标签>全局选择器

### 3、隐藏元素的方法有哪些

```css
display: none; // 元素在页面消失，不占据空间
opacity: 0; // 占据空间，透明度0
visibility: hidden; // 占据空间，不可见状态
position: absolute; //定位
clip-path; // 剪切
```

### 4、px 和 rem 的区别是什么

px：绝对单位。显示器上给我们呈现画面的像素，每个像素的大小是一样的

rem：相对单位。相当于 html 根节点的 font-size 的值。（html { font-size: 62.5%; }、1rem = 16px\*62.5%=10px）

### 5、重绘重排有什么区别 \*\*\*

重排（回流）：布局引擎会根据所有样式计算出盒模型在页面上的大小和位置

（重新排列）元素大小，位置，新元素，删除元素，内容修改，页面初始化，浏览器大小变动都会引发回流

重绘：计算好盒模型的位置大小和其他的一些属性之后，浏览器会根据每个盒模型的特性进行绘制

（重新绘制，渲染）就是在不改变布局的情况下，一些页面的变动就属于重绘。例如背景色，透明度的变动

### 6、让一个元素水平垂直居中的方式有哪些

> 1.  定位 + margin
> 2.  定位 + transform
> 3.  flex 布局
> 4.  grid 布局
> 5.  table 布局

### 7、css 的那些属性可以继承，哪些不可以继承

css 三大特性：继承、层叠、优先

子元素可以继承父类元素的样式

> 1.  字体的一些属性：font
> 2.  文本属性：line-height
> 3.  元素可见性：visibility: hidden
> 4.  表格布局：border-spacing
> 5.  列表：list-style
> 6.  页面样式：page
> 7.  声音样式属性

### 8、有没有用过预处理器

预处理语言增加了变量，函数混入等强大的功能

Sass Less
