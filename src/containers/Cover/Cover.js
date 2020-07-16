import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../../components/UI/Button/Button';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  line-height: 1.4em;
`;

const Emphasized = styled.span`
  font-size: 5rem;
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: 2rem;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 0em;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 400px;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export class Cover extends Component {
  render() {
    return (
      <Hero>
        <Title>
          <Emphasized>Hi,</Emphasized> <br></br> My Name is Hoang
        </Title>
        <SubTitle>Full-Stack Developer</SubTitle>
      </Hero>
    );
  }
}

export default Cover;
