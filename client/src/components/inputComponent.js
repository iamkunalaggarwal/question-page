import React, { Component } from 'react';
import { InputTagsContainer } from 'react-input-tags';
import axios from 'axios';

// component to add questions
export default class Input extends Component {
  constructor(props) {
    super(props);

    this.onChangequestion = this.onChangequestion.bind(this);
    this.onChangetopic = this.onChangetopic.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      question: '',
      topic: '',
      tags: []
    }
  }

  handleUpdateTags = (tags) => {
    this.setState({ tags });
  }

  onChangequestion(e) {
    this.setState({
      question: e.target.value
    })
  }

  onChangetopic(e) {
    this.setState({
      topic : e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const ques = {
      ques: this.state.question,
      topic: this.state.topic,
      tag: this.state.tags
    }

    console.log(ques);

    axios.post('http://localhost:5000/questions/add', ques)
      .then(res => console.log(res.data))
      .then(this.setState({
        question: '',
        topic :'',
        tags:[]

      }))
      .then(window.alert("Question Added!"))
      .catch((error) => {
        window.alert("please enter values of topic/tags that are predefined");
      })
      
      
  }
  render() {

    return (
    <div className="container">
      <h3 >Create New Question</h3>
      <br/>
      <form onSubmit={this.onSubmit}>
        <div className="form-group" > 
          <input  type="text"
              required
              className="form-control"
              value={this.state.question}
              onChange={this.onChangequestion}
              style={{"border-bottom" : "2px solid #8842d5" }}
              placeholder='Enter a new question'
              />
        </div>
        <div className="form-group">
          <input 
              type="text" 
              required
              className="form-control input"
              value={this.state.topic}
              onChange={this.onChangetopic}
              style={{"border-bottom" : "2px solid #8842d5" }}
              placeholder='Enter Topic'
              />
        </div>
        <div className="form-group">
        <label>Tags</label>
        <InputTagsContainer tags={this.state.tags} handleUpdateTags={this.handleUpdateTags}/>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Question" className="btn btn-info" />
        </div>
      </form>
    </div>
    )
  }
}