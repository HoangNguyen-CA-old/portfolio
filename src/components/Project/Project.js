import React from 'react';
import styled from 'styled-components';

import Button from '../../components/UI/Button/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1em;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(${(props) => props.background});
  background-size: cover;
  background-position: top;
  transition: 0.2s ease-out;
`;

const OverflowContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 25em;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 50%;
  }
`;

const StyledButton = styled(Button)`
  margin: 0 0.5em;
`;
const ButtonContainer = styled.div`
  margin: 1em 0;
`;

const Header = styled.h3`
  font-size: 2.2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const Project = (props) => {
  const handleOpenCode = () => {
    window.open(props.codeLink, '_blank');
  };
  const handleOpenDemo = () => {
    window.open(props.demoLink, '_blank');
  };
  return (
    <OverflowContainer id='projects'>
      <Container background={props.background}>
        <Header>{props.header}</Header>
        <ButtonContainer>
          <StyledButton onClick={handleOpenCode}>Code</StyledButton>
          <StyledButton onClick={handleOpenDemo}>Demo</StyledButton>
        </ButtonContainer>
      </Container>
    </OverflowContainer>
  );
};

export default Project;
