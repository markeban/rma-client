import React, { Component } from 'react';

class ClientCells extends Component {
  render() {
    const request = this.props.request;
    function createCell(reply) {
      return (
        <td className="text-left" key={reply.id}>{reply.text}</td>
      )
    }
    const replies = request.replies.map(createCell);
    return (
      <tr>
        <td className="text-left" key={0}>{request.client}</td>
        {replies}
      </tr>
    )
  }
}

export default ClientCells;