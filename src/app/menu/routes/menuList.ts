type MenuComponent = {
  icon: string;
  name: string;
  notifications?: number;
};

export const menuList: MenuComponent[] = [
  {
    icon: 'home',
    name: 'Dashboard',
  },
  {
    icon: 'view_list',
    name: 'Orders',
    notifications: 16,
  },
  {
    icon: 'loyalty',
    name: 'Products',
  },
  {
    icon: 'folder_open',
    name: 'Categories',
  },
  {
    icon: 'people_outline',
    name: 'Customers',
  },
  {
    icon: 'bar_chart',
    name: 'Reports',
  },
  {
    icon: 'star_border',
    name: 'Coupons',
  },
  {
    icon: 'chat',
    name: 'Inbox',
  },
];
