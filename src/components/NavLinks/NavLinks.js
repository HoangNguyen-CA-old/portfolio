import React from 'react';
import styled from 'styled-components';

import NavLink from './NavLink/NavLink';

const NavLinks = (props) => {
  return (
    <>
      <NavLink>Skills</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink em={true}>Projects</NavLink>
    </>
  );
};

export default NavLinks;
