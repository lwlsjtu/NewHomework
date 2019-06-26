import React, { Component } from 'react';
import ComplexTabTable from './components/ComplexTabTable';

export default class ApplyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="apply-list-page">
        <ComplexTabTable />
      </div>
    );
  }
}
