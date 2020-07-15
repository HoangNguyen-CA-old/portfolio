import React from 'react';
import styled from 'styled-components';

const Link = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;

  border: 2px solid transparent;
  padding: 0.1em 0;
  margin: 0 1.5em;

  letter-spacing: 0.1em;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const NavLink = (props) => {
  return <Link onClick={props.clicked}>{props.children}</Link>;
};

export default NavLink;
