import React, { Component } from 'react';
import styled from 'styled-components';

import Project from '../../components/Project/Project';

import recipeAppImage from '../../assets/images/recipe-app.png';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
`;

export class Projects extends Component {
  render(props) {
    return (
      <Container>
        <Project
          header='Recipe Search App'
          background={recipeAppImage}
          codeLink='https://github.com/HoangNguyen-CA/cooking-recipe-app'
          demoLink='https://recipe-app-000.herokuapp.com'
          caseStudyLink='https://hoang-nguyen-blog.herokuapp.com/article/5f14ac195775d42d0cc4e29b'
        ></Project>
        <Project
          header='Personal Blog'
          background={recipeAppImage}
          codeLink='https://github.com/HoangNguyen-CA/personal-blog'
          demoLink='https://hoang-nguyen-blog.herokuapp.com/'
        ></Project>
      </Container>
    );
  }
}

export default Projects;
