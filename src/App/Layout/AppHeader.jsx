import React from 'react';

import './styles/header.css';
import { Menu } from '../Components/Menu';
import { ReactComponent as Logo } from '../Images/start-it-logo.svg';



export function AppHeader() {
  return (
    <header>
      <Logo />
      <Menu />
    </header>
  );
}
