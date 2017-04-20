import React, { Component } from 'react';

class CompanyHeading extends Component {
  render() {
    const company = this.props.company;
    function createCell(question) {
      return (
        <th className="text-left" key={question.id}>{question.text}</th>
      )
    }
    const questions = company.questions.map(createCell);
    return (
      <thead>
        <tr>
          <th key={0}>{company.name}</th>
          {questions}
        </tr>
      </thead>
    )
  }
}

export default CompanyHeading;