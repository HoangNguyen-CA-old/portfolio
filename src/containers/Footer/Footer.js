import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  height: 4em;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.light};
`;

export class Footer extends Component {
  render() {
    return (
      <Container>
        <Text>Copyright &copy; Hoang Nguyen 2021</Text>
      </Container>
    );
  }
}

export default Footer;
