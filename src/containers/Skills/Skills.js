import React from 'react';
import styled from 'styled-components';

import SkillRow from '../../components/SkillRow/SkillRow';

import { frontendIcons, backendIcons, toolIcons } from './Icons';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 3em 1em;
`;

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.header};
  text-transform: uppercase;
  text-align: center;
`;

const Skills = () => {
  return (
    <Container>
      <Header>Skills & Technologies</Header>
      <SkillRow header='Front-End' icons={frontendIcons}></SkillRow>
      <SkillRow header='Back-End' icons={backendIcons}></SkillRow>
      <SkillRow header='Tools' icons={toolIcons}></SkillRow>
    </Container>
  );
};

export default Skills;

/*

   <SkillsContainer>
        <SkillCard
          header='Front-End'
          skills={['HTML/CSS/JS', 'React', 'Redux/Context', 'Bootstrap']}
        ></SkillCard>
        <SkillCard
          header='Back-End'
          skills={['NodeJS', 'Express', 'Axios']}
        ></SkillCard>
        <SkillCard
          header='Tools'
          skills={['Git', 'npm', 'Heroku', 'github-pages']}
        ></SkillCard>
        <SkillCard
          header='Database'
          skills={['MongoDB', 'Mongoose']}
        ></SkillCard>
      </SkillsContainer>

*/
