import React from 'react';
import styled from 'styled-components';

import Skill from './Skill/Skill';

const Container = styled.div`
  width: 16em;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;
  padding: 1.5em 1.2em;
  border-radius: 2px;
  text-align: center;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.2);
`;

const Header = styled.h5`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 0.7px 0.7px 0px rgba(0, 0, 0, 0.3);
`;

const Line = styled.hr`
  margin: 0.3em auto 0.5em auto;
  width: 80%;
  height: 2px;
  border: none;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 1em;
`;

const SkillCard = (props) => {
  let skills = '';
  if (props.skills) {
    skills = props.skills.map((skill) => <Skill>{skill}</Skill>);
  }
  return (
    <Container>
      <Header>{props.header}</Header>
      <Line></Line>
      {skills}
    </Container>
  );
};

export default SkillCard;
