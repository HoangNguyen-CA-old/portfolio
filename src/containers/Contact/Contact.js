import React, { Component } from 'react';
import styled from 'styled-components';

import FormInputs from '../../components/Forms/FormInputs';
import Button from '../../components/UI/Button/Button';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background-color${({ theme }) => theme.colors.light}
`;

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.header};
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 1em;
`;

const StyledButton = styled(Button)`
  font-size: 1.2rem;
  padding: 0.6em 2em;
  background-color: ${({ theme }) => theme.colors.darkLight};
  color: ${({ theme }) => theme.colors.light};
  border: none;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

class Contact extends Component {
  state = {
    controls: {
      email: {
        type: 'input',
        config: {},
        value: '',
      },
      message: {
        type: 'textarea',
        config: {},
        value: '',
      },
    },
  };

  handleControlChange = (event, controlName) => {
    console.log(event.target.value, this.state.controls);
    this.setState({
      controls: {
        ...this.state.controls,
        [controlName]: {
          ...this.state.controls[controlName],
          value: event.target.value,
        },
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  };

  render() {
    return (
      <Container>
        <Header>Contact</Header>
        <Form onSubmit={this.handleSubmit}>
          <FormInputs
            controls={this.state.controls}
            onChange={this.handleControlChange}
          />
          <BottomRow>
            <StyledButton type='submit'>Submit</StyledButton>
          </BottomRow>
        </Form>
      </Container>
    );
  }
}

export default Contact;
