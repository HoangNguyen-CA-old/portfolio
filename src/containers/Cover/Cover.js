import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  font-size: 5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: 2rem;
  letter-spacing: 3px;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 500px;
  max-height: 3000px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export class Cover extends Component {
  render() {
    return (
      <Hero>
        <Title>Hoang Nguyen</Title>
        <SubTitle>Full-Stack Developer</SubTitle>
      </Hero>
    );
  }
}

export default Cover;
