import React, { Component } from 'react';
import Glamorous from 'glamorous';
import TransactionList from './TransactionList';

const Container = Glamorous.div({
  backgroundColor: '#EEE',
});

const Text = Glamorous.p({
  color: '#FF33CC',
});

const Header = Glamorous.h1({
  fontSize: '22px',
});

const transactions = [
  {
    title: 'Ice cream',
    total: 25,
    owner: 'Jon',
    participants: ['Jon', 'Kelly', 'Tom'],
  },
  {
    title: 'Pizza',
    total: 30,
    owner: 'Kelly',
    participants: ['Jon', 'Kelly'],
  },
];

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <h2>Welcome to Settle Up</h2>
        </Header>
        <TransactionList transactions={transactions} />
      </Container>
    );
  }
}

export default App;
