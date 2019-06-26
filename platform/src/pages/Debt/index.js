import React, { Component } from 'react';
import CreateActivityForm from './components/CreateActivityForm';

export default class Debt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="debt-page">
        <CreateActivityForm />
      </div>
    );
  }
}
