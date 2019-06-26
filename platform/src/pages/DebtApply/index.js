import React, { Component } from 'react';
import GroupedForm from './components/GroupedForm';

export default class DebtApply extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="debt-apply-page">
        <GroupedForm />
      </div>
    );
  }
}
