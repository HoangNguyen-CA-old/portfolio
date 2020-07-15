import React from 'react';
import styled from 'styled-components';

import Navbar from './containers/Navbar/Navbar';
import Cover from './containers/Cover/Cover';

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Cover />
      <Navbar />
      <Cover />
    </Container>
  );
}

export default App;
