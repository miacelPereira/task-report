import React from 'react';

import { MdMenu, MdExitToApp, MdPages, MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, HiddenArea } from './styles';

interface OwnProps {
  handleClose: () => {};
}

const items = [
  {
    id: 1,
    name: "Task's",
    icon: <MdPages />,
    path: '/tasks',
  },
  {
    id: 2,
    name: "Report's",
    icon: <MdMenu />,
    path: '/reports',
  },
  {
    id: 3,
    name: 'Config',
    icon: <MdSettings />,
    path: '/config',
  },
  {
    id: 4,
    name: 'Logout',
    icon: <MdExitToApp />,
    path: '/',
  },
];

interface ItemData {
  id: number;
  name: string;
  icon: JSX.Element;
  path: string;
}

interface MenuItemProps {
  itemData: ItemData;
}

function MenuItem({ itemData }: MenuItemProps) {
  return (
    <Link to={itemData.path}>
      <div>
        {itemData.icon}
        <span>{itemData.name}</span>
      </div>
    </Link>
  );
}

function Menu({ handleClose }: OwnProps): JSX.Element {
  return (
    <>
      <Container>
        <header>Welcome Rafael Oliveira</header>
        <hr />
        <ul>
          {items.map(item => (
            <MenuItem key={item.id} itemData={item} />
          ))}
        </ul>
      </Container>

      <HiddenArea onClick={handleClose} />
    </>
  );
}

export default Menu;
