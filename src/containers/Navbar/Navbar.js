import React, { Component } from 'react';
import styled from 'styled-components';

import NavLinks from '../../components/NavLinks/NavLinks';
import Menu from '../../components/Menu/Menu';

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.visible ? props.theme.colors.dark : 'transparent'};

  transition: 0.2s ease-out;

  padding: 0.5em 1.5em;
  color: ${({ theme }) => theme.colors.light};
`;

const Logo = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  color: ${({ theme }) => theme.colors.primary};
`;

const Burger = styled.div`
  cursor: pointer;
  & div {
    margin: 0.4em 0;
    width: 2em;
    height: 0.25em;
    background-color: white;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const LinksContainer = styled.nav`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: row;
  }
`;
export default class Navbar extends Component {
  state = {
    navOpen: false,
    visible: false,
  };

  handleNavToggle = () => {
    this.setState((prevState) => ({
      navOpen: !prevState.navOpen,
    }));
  };

  handleNavClose = () => {
    this.setState({ navOpen: false });
  };

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Container visible={this.state.visible}>
        <Logo>Hoang Nguyen</Logo>
        <LinksContainer>
          <NavLinks open={this.state.navOpen} />
        </LinksContainer>
        <Burger onClick={this.handleNavToggle}>
          <div></div>
          <div></div>
          <div></div>
        </Burger>
        <Menu open={this.state.navOpen} onClose={this.handleNavClose} />
      </Container>
    );
  }
}
