import React, { Component } from 'react';
import styled from 'styled-components';

import NavLinks from '../../components/NavLinks/NavLinks';

const Container = styled.div`
  position: sticky;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 1em 1.5em;
  color: ${({ theme }) => theme.colors.light};
`;

const Logo = styled.h6`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Burger = styled.div``;

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Logo>Hoang Nguyen</Logo>
        <NavLinks />
      </Container>
    );
  }
}
