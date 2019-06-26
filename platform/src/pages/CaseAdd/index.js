import React, { Component } from 'react';
import StepForm from './components/StepForm';

export default class CaseAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="case-add-page">
        <StepForm />
      </div>
    );
  }
}
