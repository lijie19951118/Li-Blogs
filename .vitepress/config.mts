import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小李的博客",
  description: "部署网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '例子', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '部署网站', link: '/markdown-examples' },
          { text: 'API', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lijie19951118/boke' }
    ]
  }
})
