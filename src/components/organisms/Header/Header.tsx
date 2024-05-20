import React, { FC, useMemo } from 'react';
import hash from 'key-hash';
import Link from 'next/link';

type Props = {
  menus: Menu[];
}

type Menu = {
  label: string;
  route: 
};

export const Header: FC<Props> = ({
  menus
}) => {

  const Menus = useMemo(() => {
    return menus.map((menu) => {
      return (
        <li>
          <p>menu</p>
        </li>
      )
    });
  }, [menus]);
  
  return (
    <header>
      <h1>
        <img src="/" alt="" />
      </h1>
      { menus.length !== 0 ? (
        <nav>
          <ul>
            {Menus}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;