import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import RequestTable from './RequestTable.js'




class RequestList extends Component {
  constructor(props) {
    super(props);
    this.state = {company: {requests: [], questions: []}}
  }

  componentDidMount() {
    return axios.get('http://localhost:3000/api/v1/companies/1.json').then((response) => {
      store.dispatch({
        type: 'COMPANY_REQUEST_SUCCESS',
        company: response.data
      });
    });
  }

  render() {
    return (
      <RequestList company={this.state.company}/>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    company: store.companyState.company
  };
}

export default connect(mapStateToProps)(RequestList);