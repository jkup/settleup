import React, { Component } from 'react';
import Glamorous from 'glamorous'

const Container = Glamorous.div({
  backgroundColor: "#EEE"
});

const Text = Glamorous.p({
  color: "#FF33CC"
});

const Header = Glamorous.h1({
  fontSize: "22px"
});

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <h2>Welcome to Settle Up</h2>
        </Header>
        <Text>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Text>
      </Container>
    );
  }
}

export default App;
