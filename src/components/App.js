import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import RequestTable from './RequestTable.js';

class App extends Component {
  render() {
    return (
      <div>
        <RequestTable />
      </div>
    );
  }
}

export default App;