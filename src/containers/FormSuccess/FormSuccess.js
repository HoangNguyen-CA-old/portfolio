import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../../components/UI/Button/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
`;

const Message = styled.p`
  font-weight: 600;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 0.5em;
`;

export class FormSuccess extends Component {
  handleGoBack = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Container>
        <Message>Thank You For Sending A Message</Message>
        <Button onClick={this.handleGoBack}>Go Back</Button>
      </Container>
    );
  }
}

export default FormSuccess;
