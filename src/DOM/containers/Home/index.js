import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './style.css';

@connect()
export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <div></div>
      </div>
    )
  }
}
