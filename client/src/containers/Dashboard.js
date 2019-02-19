import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import BasicInfoCard from '../components/BasicInfoCard.js';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
      this.setState({ isLoading: true });
      if (this.props.account.length == 1) {
        this.setState({ isLoading: false });
      }
    }

  render() {
    const { account } = this.props.account;
    if (this.state.isLoading) {
      return <div> loading... </div>
    }
    return (
      <div className="dashboard">
        <BasicInfoCard info={ account } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.account.current,
  };
};

export default withRouter(connect(mapStateToProps)(Dashboard);
