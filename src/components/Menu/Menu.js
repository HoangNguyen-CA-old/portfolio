import React from 'react';
import styled from 'styled-components';

import NavLinks from '../NavLinks/NavLinks';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 200px;

  padding: 1em;

  background-color: ${({ theme }) => theme.colors.dark};
  opacity: 0.9;
  transform: scale(100%, 100%);
  display: ${(props) => (props.open ? 'block' : 'none')};
  transition: 0.2s ease-out;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
    transform: scale(150%, 150%);
  }
`;

const Icon = styled.i`
  cursor: pointer;
  font-size: 1.8rem;
  display: block;
`;

const IconContainer = styled.span`
  position: absolute;
  right: 1.5em;
  top: 1em;
  display: inline-block;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const Menu = (props) => {
  return (
    <Container open={props.open}>
      <IconContainer onClick={props.onClose}>
        <Icon className='fas fa-times'></Icon>
      </IconContainer>
      <LinksContainer>
        <NavLinks />
      </LinksContainer>
    </Container>
  );
};

export default Menu;
