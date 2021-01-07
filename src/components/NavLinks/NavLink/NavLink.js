import styled from 'styled-components';

import { Link } from 'react-scroll';



const StyledLink = styled(Link)`
  background: transparent;
  color: ${({ theme }) => theme.colors.light};
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
  text-transform: uppercase;

  border-bottom: 2px solid transparent;

  padding: 0.3em 0;
  margin: 0.2em auto;

  letter-spacing: 0.1em;

  transition: border-bottom 0.09s ease-out;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryLight};
  }

  @media ${({ theme }) => theme.breakpoints.phoneL} {
    font-size: 1.7rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 1rem;
    margin-left: 1.5em;
  }

`;

export default StyledLink;
