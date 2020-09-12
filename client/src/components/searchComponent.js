import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const Question = props => (
  <div>
  <table className="table">
    <tbody>
    <td>{props.question.ques}</td>
    </tbody>
  </table>
</div>
)

export default class Search extends Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeinput = this.onChangeinput.bind(this);

    this.state = {
      questions: [],
      input:''
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const input = {
      input: this.state.input,
    }

    console.log(input);

    axios.post('http://localhost:5000/questions/search', input)
      .then(response => {
        this.setState({ questions: response.data })
      })
      .catch((error) => {
        window.alert("search valid question");
      })
      
  }

  onChangeinput(e) {
    this.setState({
      input: e.target.value
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
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <input  type="text"
              required
              className="form-control"
              value={this.state.input}
              onChange={this.onChangeinput}
              style={{"border-bottom" : "2px solid #8842d5" }}
              placeholder="Ask any Question"
              />
        </div>
        <div className="form-group">
          <input type="submit" value="search" className="btn btn-info" />
        </div>
      </form>
      <div>
      { this.questionList() }
      </div>
      </div>
    )
  }
}