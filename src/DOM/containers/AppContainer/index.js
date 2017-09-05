import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './style.css';

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
