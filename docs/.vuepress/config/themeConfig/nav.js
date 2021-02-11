// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'Python',
    link: '/python/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        // text: 'Python文章',
        items: [
          { text: 'Python基础', link: '/pages/2270e1/' },
          { text: 'Python模块', link: '/pages/2f891d/' },
          { text: 'Django', link: '/pages/7caa24/' },
          { text: 'Flask', link: '/pages/4fde5e/' },
        ],
      },
    ],
  },
  {
    text: '数据库',
    link: '/db/',
    items: [
      { text: 'MySQL', link: '/pages/99b41b/' },
      { text: 'Redis', link: '/pages/4d3a23/' },
      { text: 'Elasticsearch', link: '/pages/aa3cd0/' },
      { text: 'MongoDB', link: '/pages/c49dd1/' },
    ],
  },
  {
    text: 'Linux',
    link: '/linux/',
    items: [
      { text: 'Linux基础', link: '/pages/776ad4/' },
      { text: 'Linux高级', link: '/pages/3e5e47/' },
      { text: 'ansible', link: '/pages/0dda3d/' },
      { text: 'zabbix', link: '/pages/94bcd2/' },
      { text: 'Nginx', link: '/pages/7bd748/' },
      { text: 'KeepAlive', link: '/pages/05a96c/' },
      { text: 'Shell', link: '/pages/8d0bd5/' },
    ],
  },
  {
    text: '容器',
    link: '/container/',
    items: [
      { text: 'Docker', link: '/pages/bdf1a4/' },
      { text: 'K8S', link: '/pages/2df239/' },

    ],
  },
  {
    text: '前端',
    link: '/web/',
    items: [
      { text: 'HTML', link: '/pages/b767c6/' },
      { text: 'CSS', link: '/pages/bf6f45/' },
      { text: 'JavaScript', link: '/pages/6ea682/' },
      { text: 'VUE', link: '/pages/f81ce4/' },
    ],
  },
  {
    text: '算法',
    link: '/algorithm/',
    items: [
      { text: '数据结构', link: '/pages/879f4f/' },
      { text: '算法', link: '/pages/053e86/' },
    ],
  },
  {
    text: '面试题',
    link: '/interview/',
    items: [
      { text: 'Python基础', link: '/pages/90d2c7/' },
      { text: 'MySQL', link: '/pages/172127/' },
      { text: 'Redis', link: '/pages/42acad/' },
      { text: '算法', link: '/pages/98c7a6/' },
      { text: '项目技术点', link: '/pages/30f240/' },
      { text: '项目部署', link: '/pages/89c493/' },
      { text: '面试其他问题', link: '/pages/847a96/' },
    ],
  },
]
