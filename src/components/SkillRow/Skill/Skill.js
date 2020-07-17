import React from 'react';
import styled from 'styled-components';

import { Icon } from '@iconify/react';

const Container = styled.div`
  align-self: stretch;
  width: 6em;
  margin: 1em;
  flex-grow: 0;
  flex-shrink: 0;
`;

const StyledIcon = styled(Icon)`
  width: 100%;
  height: auto;
  color: white;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
`;

const Label = styled.p`
  margin-top: 0.5em;
  font-size: 1.2rem;
  text-align: center;
  height: 20%;
  margin-top: auto;
`;

const Skill = (props) => {
  return (
    <Container>
      <IconContainer>
        <StyledIcon icon={props.icon}></StyledIcon>
      </IconContainer>
      <Label>{props.label}</Label>
    </Container>
  );
};

export default Skill;
