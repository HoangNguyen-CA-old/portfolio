import React, { Component } from 'react';
import styled from 'styled-components';

import Project from '../../components/Project/Project';

import recipeAppImage from '../../assets/images/recipe-app.png';
import ecommerceWebsiteImage  from '../../assets/images/ecommerce-website.png'

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
          caseStudyLink='https://hn-case-studies.netlify.app/projects/0'
        ></Project>
        <Project
          header='Ecommerce Website'
          background={ecommerceWebsiteImage}
          codeLink='https://github.com/HoangNguyen-CA/nextjs-ecommerce'
          demoLink='https://nextjs-ecommerce-snowy.vercel.app/'
        ></Project>
      </Container>
    );
  }
}

export default Projects;
