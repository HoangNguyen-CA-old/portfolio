import React from 'react';
import styled from 'styled-components';

import NavLink from './NavLink/NavLink';

const NavLinks = (props) => {
  return (
    <>
      <NavLink>Projects</NavLink>
      <NavLink>Skills</NavLink>
      <NavLink>Contact</NavLink>
    </>
  );
};

export default NavLinks;
