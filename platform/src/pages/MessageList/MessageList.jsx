import React, { Component } from 'react';
import Table from './components/Table';


export default class MessageList extends Component {
  render() {
    return (
      <div className="list-page">
        <Table />
      </div>
    );
  }
}
