// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-members',
      title: 'Member',
      type: 'item',
      url: '/members',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-departments',
      title: 'Department',
      type: 'item',
      url: '/department',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-teams',
      title: 'Teams',
      type: 'item',
      url: '/teams',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-projects',
      title: 'Projects',
      type: 'item',
      url: '/projects',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-leads',
      title: 'Leads',
      type: 'item',
      url: '/leads',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-clients',
      title: 'Clients',
      type: 'item',
      url: '/clients',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-tasks',
      title: 'Task',
      type: 'item',
      url: '/task',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-payroll',
      title: 'Payroll',
      type: 'item',
      url: '/payroll',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-earning',
      title: 'Earning',
      type: 'item',
      url: '/earning',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/typography',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/color',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/shadow',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'ant-icons',
      title: 'Ant Icons',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined
      // breadcrumbs: false
    }
  ]
};

export default utilities;
