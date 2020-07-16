import React, { Component } from 'react';
import styled from 'styled-components';

import FormInputs from '../../components/Forms/FormInputs';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const InputsContainer = styled.div`
  width: 80%;
  max-width: 600px;
`;

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.header};
  text-transform: uppercase;
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

  render() {
    return (
      <Container>
        <Header>Contact</Header>
        <InputsContainer>
          <FormInputs
            controls={this.state.controls}
            onChange={this.handleControlChange}
          />
        </InputsContainer>
      </Container>
    );
  }
}

export default Contact;
