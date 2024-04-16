import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小李的博客",
  description: "部署网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '部署网站', link: '/makeWeb' },
          { text: 'ES6基础', link: '/ES6' },
          { text: 'Promise基础', link: '/Promise' },
          { text: '手写Promise', link: '/PromiseCode' },
					// { text: 'Test', link: '/test' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lijie19951118/boke' }
    ]
  }
})
