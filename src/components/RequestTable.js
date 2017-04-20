import React, { Component } from 'react';
import CompanyHeading from './CompanyHeading.js';
import ClientRows from './ClientRows.js';
import axios from 'axios';


class RequestTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {company: {requests: [], questions: []}}
  // }

  // componentDidMount() {
  //   this.CompanyList();
  // }

  // CompanyList() {
  //   return axios.get('http://localhost:3000/api/v1/companies/1.json').then((response) => {
  //     this.setState({
  //       company: response.data});
  //   });
  // }

  render() {
    const company = this.props.company; 
    return (
      <table className="table">        
          <CompanyHeading company={company} />
          <ClientRows requests={company.requests} />
      </table>
    );
  }
}

export default RequestTable;