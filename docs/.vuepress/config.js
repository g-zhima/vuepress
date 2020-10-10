module.exports = {
  title: 'ZHIMA',
  description: 'CODE IS POETRY',
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: '主页', link: '/' },
      {
        text: '分类',
        items: [
          { text: 'HTML', link: '/blogs/html/'},
          { text: 'CSS',link: '/blogs/css/'},
          { text: 'JavaScript',link: '/blogs/javascript/'},
          { text: 'Vue',link: '/blogs/vue/'},
        ]
      },
      { text: '关于我', link: '/about/' },
      { text: 'Github', link: 'https://github.com/g-zhima' },
    ],
  }
}