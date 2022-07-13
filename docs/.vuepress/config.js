module.exports = {
  title: '大鱼海棠',
  description: '大鱼海棠个人博客',
  theme: 'reco',
  // base: '', // 本地运行
  base: './', // 打包
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      {
        text: 'HtmlCss',
        link: '/notes/html',
      },
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
        children: [{ title: 'express', path: 'notes/nodejs/express' }],
        initialOpenGroupIndex: 0, // 可选的, 默认值是 0
      },
      {
        title: 'Vue',
        children: [{ title: 'router', path: 'notes/vue/router' }],
        initialOpenGroupIndex: 0, // 可选的, 默认值是 0
      },
      {
        title: 'markdown',
        children: [{ title: '基本语法', path: 'notes/markdown/index.md' }],
        initialOpenGroupIndex: 0, // 可选的, 默认值是 0
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
