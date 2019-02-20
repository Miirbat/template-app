import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BasicInfoCard from '../components/BasicInfoCard.js';

import '../stylesheets/Buttons.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }
  async componentDidMount() {
      this.setState({ isLoading: true });
      if ( this.props.account.hasOwnProperty("id") ) {
        this.setState({ isLoading: false });
      }
    }

  render() {
    const { account } = this.props;
    if (this.state.isLoading) {
      return <div> loading... </div>
    }
    return (
      <div className="dashboard">
        <BasicInfoCard account={ account } /> <br/>
        <button type="button" className="button logout" onClick={() => this.props.history.push('/logout')}> Log Out </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.account.current
  };
};

export default withRouter(connect(mapStateToProps)(Dashboard));
