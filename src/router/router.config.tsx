import React from 'react';
import BasicLayout from '../layout/BasicLayout';
import Home from '../pages/Home';
import Applications from '../pages/Applications';
import Password from '../pages/Password';
import TencentLogin from '../pages/TencentLogin';

// import Detail from '../src/pages/Detail';
// import NotFound from '../src/pages/NotFound';

const routes = [
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        path: 'home',
        element: <Home />
      },
      {
        index: true,
        path: 'applications',
        element: <Applications />
      },
      {
        index: true,
        path: 'password',
        element: <Password />
      },
      {
        index: true,
        path: 'tencentLogin',
        element: <TencentLogin />
      },
    //   {
    //     path: 'articleList/:id',
    //     element: <Detail />
    //   },
    //   {
    //     path: '*',
    //     element: <NotFound />
    //   }
    ]
  }
];

export default routes;