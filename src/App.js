import React, { Component } from 'react';
import CircleArea from './CircleArea';

export default class App extends Component {

  state = { row: undefined }

  render() {
    return (
      <div className="app">
        <div className="header">
          {'Circle Viewer'}
        </div>
        <div className="main">
          <CircleArea row={this.state.row} />
        </div>
        <div className="footer">
          <div className="button-group">
            <span>{'Show:'}</span>
            <button onClick={() => { this.setState({ row: undefined }) }}>{'All'}</button>
            <button onClick={() => { this.setState({ row: 5 }) }}>{'Row 5'}</button>
          </div>
        </div>
      </div>
    );
  }
};
