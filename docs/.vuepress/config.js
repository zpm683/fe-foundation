const fs = require('fs');
const path = require('path');
const moment = require('moment');

const navStructure = require('../note/nav');

// * ---------------------------------------------------------------- sidebar

const docFolder = path.resolve(process.cwd(), './docs');
const noteFolder = path.resolve(docFolder, './note');
const hasFile = (e) => fs.existsSync(path.resolve(noteFolder, e));
const toNavUrl = (url) => path.resolve('/note', url);

// * --------------------------------

// => { [groupName: string]: string[] }

const articleSidebar = Object.entries(navStructure)
  .map(([groupName, list]) => [groupName, list.filter(hasFile)])
  .filter(([, list]) => list.length > 0)
  .map(([g, list]) => [g, list.map(toNavUrl)])
  .map(([title, children]) => ({ title, children, collapsable: false }));

// => [{ title, children: string[], collapsable }]

const navCateOfFirst = articleSidebar.map(({ title: text, children: [link] }) => ({ text, link }));

// => [{ text, link }]

// * ---------------------------------------------------------------- config

const config = {
  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //     title: 'FE 笔记',
  //     description: '前端开发技术笔记',
  //   },
  // },

  title: 'FE 笔记',
  description: '前端开发技术笔记',
  head: [['link', { rel: 'icon', type: 'image/jpg', href: '/js-nation-square-blue.png' }]],

  dest: './public',

  themeConfig: {
    lastUpdated: '上次更新',
    // editLinks: true,

    nav: [
      { text: '分类', items: navCateOfFirst },
      { text: '关于', link: '/about/ref.md' },

      { text: 'Learning-By-Doing', link: 'https://github.com/seognil-study/learning-by-doing' },
    ],
    repo: 'seognil/fe-foundation',

    sidebarDepth: 3,
    sidebar: {
      '/note': articleSidebar,
      '/about': false,
    },
  },

  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).format('lll');
        },
      },
    ],
  ],
};

// * ---------------------------------------------------------------- output

module.exports = config;
