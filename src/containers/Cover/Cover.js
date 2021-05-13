import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import coverBG from '../../assets/images/cover.jpg';

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
`;

const moveInTop = keyframes`
  0%{
    transform: translateY(-100px);
    opacity: 0
  }
  100%{
    transform: translateX(0);
    opacity: 1
  }
`;
const moveInLeft = keyframes`
 0%{
    transform: translateX(-100px);
    opacity: 0
  }
  100%{
    transform: translateX(0);
    opacity: 1
  }
`;
const fadeIn = keyframes`
 0%{
    opacity: 0
  }
  100%{
    opacity: 1
  }`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  line-height: 1.4em;
`;

const TitleMain = styled.span`
  font-size: 5rem;
  display: block;
  animation: ${moveInTop} 1s ease-out;
`;

const TitleSub = styled.span`
  display: block;
  animation: ${moveInLeft} 1s ease-out 1s;
  animation-fill-mode: backwards;
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 2rem;
  letter-spacing: 3px;
  text-align: center;
  font-weight: normal;
  animation: ${fadeIn} 1s ease-out 2s;
  animation-fill-mode: backwards;

  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.7);

  margin-top: 1.2em;
  padding-bottom: 0.15em;
  text-transform: uppercase;
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

  z-index: -2;
  background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.dark}88,
      ${({ theme }) => theme.colors.dark}88
    ),
    url(${coverBG});
  background-size: cover;
  background-position: center;
`;

const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  bottom: 5em;
  color: ${({ theme }) => theme.colors.light};
  animation: ${arrowHover} 2s linear infinite, ${fadeIn} 1s ease-out 2s;
  animation-fill-mode: backwards;
`;

const StyledIcon = styled(Icon)`
  font-size: 1.8rem;
`;

export class Cover extends Component {
  render() {
    return (
      <Hero>
        <Title>
          <TitleMain>Hi,</TitleMain>
          <TitleSub>I build apps for the web</TitleSub>
        </Title>
        <SubTitle>Software Engineer</SubTitle>
        <ArrowContainer>
          <StyledIcon icon={arrowIcon}></StyledIcon>
        </ArrowContainer>
      </Hero>
    );
  }
}

export default Cover;
