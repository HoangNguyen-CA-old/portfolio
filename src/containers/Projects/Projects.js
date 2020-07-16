import React, { Component } from 'react';
import styled from 'styled-components';

import Project from '../../components/Project/Project';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
`;

export class Projects extends Component {
  render() {
    return (
      <Container>
        <Project></Project>
        <Project></Project>
      </Container>
    );
  }
}

export default Projects;
