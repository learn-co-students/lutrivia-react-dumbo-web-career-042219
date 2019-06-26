import React, { Component } from 'react';

export default class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trueColor: "white",
      falseColor: "white"
    }
  }

  handleClick = (e) => {
    if(e.target.value === "true") {
      if(this.props.answer.toString() === e.target.value) {
        return this.setState({...this.state, trueColor: "green"})
      } else this.setState({...this.state, trueColor: "red"})
    } else if(e.target.value === "false") {
      if(this.props.answer.toString() === e.target.value) {
        return this.setState({...this.state, falseColor: "green"})
      } else this.setState({...this.state, falseColor: "red"})
    }
  }

  render() {
    const trueStyle = {
      backgroundColor: this.state.trueColor
    }

    const falseStyle = {
      backgroundColor: this.state.falseColor
    }

    return (
      <li>
        {this.props.text}
        <br></br>
        <button value={true} style={trueStyle} onClick={this.handleClick}>True</button>
        <button value={false} style={falseStyle} onClick={this.handleClick}>False</button>
      </li>
    );
  }

}