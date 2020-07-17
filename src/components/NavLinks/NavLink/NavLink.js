import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-scroll';

const Highlighted = css`
  border-radius: 1em;
  border: 2px solid ${({ theme }) => theme.colors.light};
  padding: 0.3em 0.5em;
  margin: 0.5em auto;

  transition: 0.2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
    border-bottom: 2px solid ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 1.1rem;
    margin: 0 0 0 1.5em;
  }
`;

const StyledLink = styled(Link)`
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

  transition: border-bottom 0.09s ease-out;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.breakpoints.phoneL} {
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 1.1rem;
    margin-left: 1.5em;
  }

  ${(props) => (props.em ? Highlighted : null)}
`;

const NavLink = (props) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default NavLink;
