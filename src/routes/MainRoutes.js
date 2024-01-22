/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
// import MembersTable from 'pages/members/components/MembersTable';

// render - dashboard
// const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const WelcomeDefault = Loadable(lazy(() => import('pages/welcome')));

// render - sample page
const MembersTable = Loadable(lazy(() => import('pages/members/index')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <WelcomeDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <WelcomeDefault />
        }
      ]
    },
    {
      path: 'members',
      element: <MembersTable />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
