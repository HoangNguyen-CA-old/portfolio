import React from 'react';
import styled from 'styled-components';

import Navbar from './containers/Navbar/Navbar';
import Cover from './containers/Cover/Cover';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Cover />
      <Navbar />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
