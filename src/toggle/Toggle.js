import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from './actions';

const Toggle = props => (
  <div>
    {props.messageVisibility && (
      <p>Toggle On, Toggle Off, This is controlled by Redux ;-)</p>
    )}
    <button onClick={props.toggleMessage}>Toggle Me</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
