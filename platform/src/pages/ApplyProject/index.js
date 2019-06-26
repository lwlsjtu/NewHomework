import React, { Component } from 'react';
import GroupedForm from './components/GroupedForm';

export default class ApplyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="apply-project-page">
        <GroupedForm />
      </div>
    );
  }
}
