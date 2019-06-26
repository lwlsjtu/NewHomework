import React, { Component } from 'react';
import GroupedForm from './components/GroupedForm';

export default class Page20 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page20-page">
        <GroupedForm />
      </div>
    );
  }
}
