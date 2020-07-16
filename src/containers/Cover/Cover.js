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

const Line = styled.hr`
  display: inline-block;
  width: 3em;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.light};
  border: none;
  margin: 1em 0;
  border-radius: 1em;
`;

export class Cover extends Component {
  render() {
    return (
      <Hero>
        <Title>
          <Emphasized>Hi,</Emphasized> <br></br> I build apps for the web
        </Title>
        <Line></Line>
        <SubTitle>Full-Stack Developer</SubTitle>
      </Hero>
    );
  }
}

export default Cover;
