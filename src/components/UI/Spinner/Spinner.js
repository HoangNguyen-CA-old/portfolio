import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  &,
  &:after {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
  & {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(0, 173, 181, 0.2);
    border-right: 1.1em solid rgba(0, 173, 181, 0.2);
    border-bottom: 1.1em solid rgba(0, 173, 181, 0.2);
    border-left: 1.1em solid #00adb5;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <StyledSpinner></StyledSpinner>;
};

export default Spinner;
