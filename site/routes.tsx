import React from 'react';
import Home from './page/Home';
import asyncComponent from './page/asyncComponent';
import { RouteConfig } from 'react-router-config';

const ButtonDemo = asyncComponent(() => import('./page/Button'));
const IconDemo = asyncComponent(() => import('./page/Icon'));
let routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/button',
    component: ButtonDemo
  },
  {
    path: '/icon',
    component: IconDemo
  }
];

// 用div将懒加载的代码包裹起来，防止路由动画不起作用
routes = routes.map(i => ({
  ...i,
  component: props => (
    <div className='page-box'>
      <i.component {...props} />
    </div>
  )
}));
export default routes;
