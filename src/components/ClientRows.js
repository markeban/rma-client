import React, { Component } from 'react';
import ClientCells from './ClientCells.js';

class ClientRows extends Component {
  render() {
    const requests = this.props.requests;
    function createRow(request) {
      return (
        <ClientCells key={request.id} request={request}/>
      )
    }
    const rows = requests.map(createRow);
    return (
      <tbody className="table-hover">{rows}</tbody>
    );
  }
}

export default ClientRows;