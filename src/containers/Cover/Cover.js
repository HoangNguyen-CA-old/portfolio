import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';


import { Icon } from '@iconify/react';

import arrowIcon from '@iconify/icons-mdi/arrow-down';

const arrowHover = keyframes`
  0%{
    transform: translateY(0)
  }
  100%{
    transform: translateY(0)
  }

  50%{
    transform: translateY(-1.5em)
  }
`


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

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-size: 2rem;
  letter-spacing: 3px;
  text-align: center;
  font-weight: normal;
`;

const Hero = styled.header`
  position: relative;
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

const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  bottom: 5em;
  color: ${({ theme }) => theme.colors.light};
  animation: ${arrowHover} 2s linear infinite;
 
`;

const StyledIcon = styled(Icon)`
  font-size: 1.8rem;
`;

export class Cover extends Component {
  render() {
    return (
      <Hero>
        <Title>
          <Emphasized>Hi,</Emphasized> <br></br> I build apps for the web
        </Title>
        <Line></Line>
        <SubTitle>Software Engineer</SubTitle>
        <ArrowContainer>
          <StyledIcon icon={arrowIcon}></StyledIcon>
        </ArrowContainer>
      </Hero>
    );
  }
}

export default Cover;
