import React from 'react';
import styled from 'styled-components';

import Skill from './Skill/Skill';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h5`
  font-size: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const Line = styled.hr`
  width: 10em;
  height: 2px;
  border: none;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 1em;

  margin: 1em 0;
`;

const SkillsRow = (props) => {
  let icons = props.icons.map((icon) => {
    return <Skill icon={icon.icon} label={icon.label}></Skill>;
  });
  return (
    <Container>
      <Header>{props.header}</Header>
      <Line></Line>
      <SkillsContainer>{icons}</SkillsContainer>
    </Container>
  );
};

export default SkillsRow;
