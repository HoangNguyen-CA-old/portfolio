import React from 'react';
import styled from 'styled-components';

import Button from '../../components/UI/Button/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;

  padding: 1em;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20em;

  background-color: white;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 50%;
  }
`;

const StyledButton = styled(Button)`
  margin: 1em 0.2em;
`;
const ButtonContainer = styled.div``;

const Header = styled.h3`
  font-size: 2.2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const Project = () => {
  return (
    <Container>
      <Header>Project</Header>
      <ButtonContainer>
        <StyledButton>Code</StyledButton>
        <StyledButton>Demo</StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export default Project;
