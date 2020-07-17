import React from 'react';

import NavLink from './NavLink/NavLink';

const NavLinks = (props) => {
  return (
    <>
      <NavLink to={'skills'} duration={500} smooth={true}>
        Skills
      </NavLink>
      <NavLink to={'contact'} duration={500} smooth={true}>
        Contact
      </NavLink>
      <NavLink emp={1} to={'projects'} duration={500} smooth={true}>
        Projects
      </NavLink>
    </>
  );
};

export default NavLinks;
