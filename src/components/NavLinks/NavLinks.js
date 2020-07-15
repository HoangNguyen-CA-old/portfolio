import React from 'react';
import styled from 'styled-components';

import NavLink from './NavLink/NavLink';

const Container = styled.div`
  display: flex;
`;

const NavLinks = () => {
  return (
    <Container>
      <NavLink>Projects</NavLink>
      <NavLink>Skills</NavLink>
      <NavLink>Contact</NavLink>
    </Container>
  );
};

export default NavLinks;
