import React, { Component } from 'react';
import Glamorous from 'glamorous';

const Row = Glamorous.tr({
  backgroundColor: '#FFF',
});

const Cell = Glamorous.td({
  padding: '5px 10px',
});

class TransactionItem extends Component {
  render() {
    const { title, participants, total, owner } = this.props.transaction;
    return (
      <Row>
        <Cell>{title}</Cell>
        <Cell>{total}</Cell>
        <Cell>{owner}</Cell>
      </Row>
    );
  }
}

export default TransactionItem;
