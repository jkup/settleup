import React, { Component } from 'react';
import Glamorous from 'glamorous';
import TransactionItem from './TransactionItem';

const Row = Glamorous.tr({
  backgroundColor: '#FFF',
});

const Cell = Glamorous.td({
  padding: '5px 10px',
});

class TransactionList extends Component {
  render() {
    const transactions = this.props.transactions.map(transaction => (
      <TransactionItem transaction={transaction} />
    ));
    return <table>
        <thead>
          <Row>
            <Cell>Edit</Cell>
            <Cell>Date</Cell>
            <Cell>Transaction</Cell>
            <Cell>Total</Cell>
            <Cell>Who Paid?</Cell>
            <Cell>Participants</Cell>
          </Row>
        </thead>
        <tbody>{transactions}</tbody>
      </table>;
  }
}

export default TransactionList;
