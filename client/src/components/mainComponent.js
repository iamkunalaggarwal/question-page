import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Question = props => (
  <tr>
    <td>{props.question.ques}</td>
  </tr>
)

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {questions: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/questions')
      .then(response => {
        this.setState({ questions: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  questionList() {
    return this.state.questions.map(currentquestion => {
      return <Question question={currentquestion} key={currentquestion._id}/>;
    })
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead bgcolor= "9FD8FF">
            <tr>
              <th >Questions</th>
            </tr>
          </thead>
          <tbody >
            { this.questionList() }
          </tbody>
        </table>
      </div>
    )
  }
}