module.exports = {
  title: '大鱼海棠',
  description: '大鱼海棠个人博客',
  theme: 'reco',
  // base: '', // 本地运行
  base: './', // 打包
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/images/logo.png',
    navbar: true,
    nav: [
      // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
      { text: '百度一下', link: 'https://www.baidu.com' },
      { text: 'CSDN', link: 'https://blog.csdn.net', target: '_blank' },
      {
        text: '豆瓣',
        link: 'https://movie.douban.com',
        target: '_self',
        rel: '',
      },
      // 支持嵌套,形成下拉式的导航菜单
      // {
      //   text: '语言',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: '中文', link: '' },
      //     { text: '英文', link: '' }
      //   ]
      // }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'HtmlCss',
        collapsable: true,
        children: [
          { title: 'html', path: 'notes/htmlcss/html' },
          { title: 'css', path: 'notes/htmlcss/css' },
        ],
        initialOpenGroupIndex: 1, // 可选的, 默认值是 0
      },
      {
        title: 'JavaScript进阶',
        children: [{ title: 'js', path: 'notes/javascript/es6' }],
        initialOpenGroupIndex: 0, // 可选的, 默认值是 0
      },
      {
        title: 'NodeJs',
        children: [
          { title: 'express', path: 'notes/nodejs/express' },
          { title: 'CommonJS', path: 'notes/nodejs/CommonJS' },
        ],
        initialOpenGroupIndex: 0, // 可选的, 默认值是 0
      },
      {
        title: 'Vue',
        children: [{ title: 'router', path: 'notes/vue/router' }],
        initialOpenGroupIndex: 0, // 可选的, 默认值是 0
      },
      {
        title: 'MarkDown',
        children: [{ title: '基础语法', path: 'notes/markdown/grammar' }],
        initialOpenGroupIndex: 0, // 可选的, 默认值是 0
      },
      {
        title: '面试题',
        collapsable: true,
        children: [
          { title: 'css', path: 'notes/interview/css' },
          { title: 'javascript', path: 'notes/interview/javascript' },
          { title: 'html5,css3', path: 'notes/interview/c3h5' },
          { title: 'vue', path: 'notes/interview/vue' },
          { title: 'Echarts', path: 'notes/interview/Echarts' },
          { title: 'uniapp', path: 'notes/interview/uniapp' },
          { title: 'Webpack', path: 'notes/interview/Webpack' },
          { title: 'git', path: 'notes/interview/git' },
          { title: 'hr', path: 'notes/interview/hr' },
        ],
        initialOpenGroupIndex: 1, // 可选的, 默认值是 0
      },
      {
        title: '闲文杂记',
        collapsable: true,
        children: [
          { title: '第一章', path: 'notes/article/01' },
          { title: '第二章', path: 'notes/article/02' },
          { title: '第三章', path: 'notes/article/03' },
        ],
        initialOpenGroupIndex: 1, // 可选的, 默认值是 0
      },
    ],
  },
}
