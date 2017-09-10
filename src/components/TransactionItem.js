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
    const { datetime, title, participants, total, owner } = this.props.transaction;
    const date = new Date(datetime).toLocaleDateString();
    return (
      <Row>
        <Cell>
          <button>Edit</button>
        </Cell>
        <Cell>{date}</Cell>
        <Cell>{title}</Cell>
        <Cell>{total}</Cell>
        <Cell>{owner}</Cell>
        <Cell>{participants.join(', ')}</Cell>
      </Row>
    );
  }
}

export default TransactionItem;
