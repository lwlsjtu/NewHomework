// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';
import Charts from './pages/Charts';
import BaiscCharts from './pages/BaiscCharts';
import Terms from './pages/Terms';
import Result from './pages/Result';
import BasicList from './pages/BasicList';
import ProjectList from './pages/ProjectList';
import BasicTable from './pages/BasicTable';
import GeneralTable from './pages/GeneralTable';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import Fail from './pages/Fail';
import { Empty, Forbidden, NotFound, ServerError } from './pages/Exception';
import { getRouterData } from './utils/utils';

import UserLayout from './layouts/UserLayout';

import BasicLayout from './layouts/BasicLayout';
import CaseAdd from './pages/CaseAdd';

import Debt from './pages/Debt';
import ApplyList from './pages/ApplyList';

import Page20 from './pages/Page20';
import ApplyProject from './pages/ApplyProject';
import { asideMenuConfig } from './menuConfig';
import DebtApply from './pages/DebtApply';
import MessageList from './pages/MessageList';

const routerConfig = [
  {
    path: '/chart/general',
    component: Charts,
  },
  {
    path: '/exception/500',
    component: ServerError,
  },
  {
    path: '/chart/basic',
    component: BaiscCharts,
  },
  {
    path: '/list/basic',
    component: BasicList,
  },
  {
    path: '/list/general',
    component: ProjectList,
  },
  {
    path: '/result/messageList',
    component: MessageList,
  },
  {
    path: '/result/fail',
    component: Fail,
  },
  {
    path: '/table/basic',
    component: BasicTable,
  },
  {
    path: '/profile/basic',
    component: Profile,
  },
  {
    path: '/profile/general',
    component: Terms,
  },
  {
    path: '/case/list',
    component: GeneralTable,
  },
  {
    path: '/account/setting',
    component: Setting,
  },
  {
    path: '/dashboard/monitor',
    component: Dashboard,
  },
  {
    path: '/exception/403',
    component: Forbidden,
  },
  {
    path: '/exception/204',
    component: Empty,
  },
  {
    path: '/exception/404',
    component: NotFound,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/case/add',
    layout: BasicLayout,
    component: CaseAdd,
  },
  {
    path: '/case/debt',
    layout: BasicLayout,
    component: Debt,
  },
  {
    path: '/case/applyList',
    layout: BasicLayout,
    component: ApplyList,
  },
  {
    path: '/dashboard/userInfo',
    layout: BasicLayout,
    component: Page20,
  },
  {
    path: '/list/applyProject',
    layout: BasicLayout,
    component: ApplyProject,
  },
  {
    path: '/debt/debtApply',
    layout: BasicLayout,
    component: DebtApply,
  },
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData };
