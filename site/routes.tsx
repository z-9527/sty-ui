import React from 'react';
import Home from './page/Home';
import asyncComponent from './page/asyncComponent';

const ButtonDemo = asyncComponent(() => import('./page/Button'));
let routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/button',
    component: ButtonDemo
  }
];

// 用div将懒加载的代码包裹起来，防止路由动画不起作用
routes = routes.map(i => ({
  ...i,
  component: () => (
    <div className='page-box'>
      <i.component />
    </div>
  )
}));
export default routes;
