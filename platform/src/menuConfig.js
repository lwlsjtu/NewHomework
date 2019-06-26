// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: 'feedback',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: 'help',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home2',
    children: [
      {
        name: 'monitor',
        path: '/dashboard/monitor',
        authority: 'user',
      },
      {
        name: 'userInfo',
        path: '/dashboard/userInfo',
        icon: 'home',
      },
    ],
  },
  {
    name: '列表页',
    path: '/list',
    icon: 'copy',
    children: [
      {
        name: 'basic',
        path: '/list/basic',
      },
      {
        name: 'general',
        path: '/list/general',
      },
      {
        name: 'applyProject',
        path: '/list/applyProject',
        icon: 'home',
      },
    ],
  },
  {
    name: 'result',
    path: '/result',
    icon: 'edit2',
    children: [
      {
        name: 'success',
        path: '/result/messageList',
        // authority: 'user',
      },
      {
        name: 'fail',
        path: '/result/fail',
      },
    ],
  },
  {
    name: '债务中心',
    path: '/debt',
    icon: 'person',
    children: [
      {
        name: 'dabtApply',
        path: '/debt/debtApply',
        // authority: 'user',
      },
      {
        name: 'debt',
        path: '/case/debt',
        icon: 'home',
        authority: 'admin',
      },
      {
        name: 'applyList',
        path: '/case/applyList',
        icon: 'home',
      },
    ],
  },
  {
    name: 'case',
    path: '/case',
    icon: 'person',
    children: [
      {
        name: 'general',
        path: '/case/list',
        // authority: 'user',
      },
      {
        name: 'debt',
        path: '/case/debt',
        icon: 'home',
        authority: 'admin',
      },
      {
        name: 'applyList',
        path: '/case/applyList',
        icon: 'home',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
