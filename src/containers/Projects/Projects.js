import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
`;

export class Projects extends Component {
  render() {
    return <Container></Container>;
  }
}

export default Projects;
