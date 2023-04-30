import React from 'react';
import BasicLayout from '../layout/BasicLayout';
import Home from '../pages/Home';
import Applications from '../pages/Applications';
import Password from '../pages/Password';
import TencentLogin from '../pages/TencentLogin';
import Account from '../pages/Account';
import Register from '../pages/Register';
import Recover from '../pages/Recover';
import Apps from '../pages/Apps';
import Transfer from '../pages/Transfer';
import SimpleTrans from '../pages/SimpleTrans';
import TransferResult from '../pages/TransferResult';

import { RestorePageOutlined } from '@material-ui/icons';

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
        path: 'apps',
        element: <Apps />
      },
      {
        index: true,
        path: 'applications',
        element: <Applications />
      },
      {
        index: true,
        path: 'account',
        element: <Account />
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
      {
        index: true,
        path: 'recover',
        element: <Recover />
      },
      {
        index: true,
        path: 'create',
        element: <Register />
      },
      {
        index: true,
        path: 'transfer',
        element: <Transfer />
      },
      {
        index: true,
        path: 'simpleTrans',
        element: <SimpleTrans />
      },
      {
        index: true,
        path: 'transResult',
        element: <TransferResult />
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