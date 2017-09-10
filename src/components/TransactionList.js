import React, { Component } from 'react';
import Glamorous from 'glamorous';
import TransactionItem from './TransactionItem';

class TransactionList extends Component {
  render() {
    const transactions = this.props.transactions.map(transaction => (
      <TransactionItem transaction={transaction} />
    ));
    return <div>{transactions}</div>;
  }
}

export default TransactionList;
