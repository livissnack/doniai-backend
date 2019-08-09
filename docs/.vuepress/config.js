module.exports = {
  title: "Doniai Backend",
  description: "Doniai website manage system!",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    sidebarDepth: 4,
    lastUpdated: "Last Updated",
    nav: [
      { text: "求索", link: "/FAQ/" },
      { text: "仓库", link: "/Store/" },
      { text: "随笔", link: "/Thought/" },
      {
        text: "Concat",
        items: [
          {
            text: "Segmentfault",
            link: "https://segmentfault.com/u/livissnack"
          }
        ]
      },
      {
        text: "GitHub",
        items: [
          { text: "GitHub首页", link: "https://github.com/livissnack" },
          { text: "Blog", link: "https://www.doniai.com" }
        ]
      }
    ],
    sidebar: {
      "/FAQ/": [
        {
          title: "消化堆",
          children: [
            ["/FAQ/DigestionHeap/Digested", "消化过"],
            ["/FAQ/DigestionHeap/Digesting", "消化中"],
            ["/FAQ/DigestionHeap/DigestWill", "待消化"]
          ]
        },
        {
          title: "输出层",
          children: [
            ["/FAQ/Console/A001", "#A001_VuePress"],
            ["/FAQ/Console/A002", "#A002_插件清单"]
          ]
        },
        ["/FAQ/", "百科首页"],
        ["/FAQ/Pool/SkillStack", "技术栈"],
        ["/FAQ/Pool/Review", "归去来"]
      ],
      "/Thought/": [
        ["", "随笔首页"],
        {
          title: "游记",
          children: [["/Thought/Travels/beiPing", "北平游记"]]
        },
        {
          title: "年终回顾",
          children: [
            ["/Thought/YearReview/2018", "2018年"],
            ["/Thought/YearReview/2019", "2019年"]
          ]
        }
      ],
      "/Store/": [
        ["", "仓库首页"],
        {
          title: "应用",
          children: [
            ["/Store/Apps/DownDoors", "下载门户"],
            ["/Store/Apps/OwnTest", "博主测评"]
          ]
        },
        {
          title: "电影",
          children: [["/Store/Films/", "收藏级电影"]]
        },
        {
          title: "动画",
          children: [["/Store/Anime/", "收藏级动画"]]
        }
      ]
    }
  }
};
