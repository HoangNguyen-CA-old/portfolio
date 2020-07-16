import React from 'react';
import styled from 'styled-components';

import SkillCard from '../../components/SkillCard/SkillCard';

import background from '../../assets/images/skills-bg.jpg';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkLight};
  padding: 4em 1em;


  /*
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${background});
  background-size: 100%;
  background-position: center;
  object-fit: cover;
  */
`;

const SkillsContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 2em;

  width: 80%;
  margin: 0 auto;

  grid-template-columns: 1fr;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Skills = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Skills;
