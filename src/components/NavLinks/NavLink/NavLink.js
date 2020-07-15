import React from 'react';
import styled from 'styled-components';

const Link = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;

  border: 2px solid transparent;
  padding: 0.2em 0;
  margin: 0.2em auto;

  letter-spacing: 0.1em;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.breakpoints.phoneL} {
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 1.1rem;
    margin: 0 1.5em;
  }
`;

const NavLink = (props) => {
  return <Link onClick={props.clicked}>{props.children}</Link>;
};

export default NavLink;
