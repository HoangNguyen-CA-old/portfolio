import React from 'react';
import styled from 'styled-components';

import Button from '../../components/UI/Button/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2em 2em;

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

const OverflowContainer = styled.article`
  overflow: hidden;
  width: 100%;
  height: 35rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 50%;
  }
`;

const StyledButton = styled(Button)`
  margin: 0 0.5em;
  padding: 0.5em 0.7em;
`;

const CodeButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
`;

const DemoButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
`;

const CaseButton = styled(StyledButton)`
  margin-top: 0.8em;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Header = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 0.7em;
  text-transform: uppercase;
  text-align:center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Project = (props) => {
  const handleOpenCode = () => {
    window.open(props.codeLink, '_blank');
  };
  const handleOpenDemo = () => {
    window.open(props.demoLink, '_blank');
  };

  const handleOpenCaseStudy = () => {
    window.open(props.caseStudyLink, '_blank');
  };
  return (
    <OverflowContainer id='projects'>
      <Container background={props.background}>
        <Header>{props.header}</Header>
        <ButtonContainer>
          <CodeButton onClick={handleOpenCode}>Code</CodeButton>
          <DemoButton onClick={handleOpenDemo}>Demo</DemoButton>
        </ButtonContainer>
        {props.caseStudyLink ? (
          <>
            <CaseButton onClick={handleOpenCaseStudy}>Case Study</CaseButton>
          </>
        ) : (
          ''
        )}
      </Container>
    </OverflowContainer>
  );
};

export default Project;
