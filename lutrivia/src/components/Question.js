import React, { Component } from 'react';

class Question extends Component {
  constructor(props){
    super(props)
    this.state = {
        backgroundColor: "white"
      }
    }
  
  handleTrueClick = (event) => {
  
    debugger
    let newState = this.state
    this.props.answer === event.target.className ? this.greenColor() : this.redColor()
  }


  greenColor = () => {
    
    this.setState({
      backgroundColor: "green"
    })
  }

  redColor = () => {
    this.setState({
    backgroundColor: "red"
    })
  }

  handleFalseClick = (event) => {
  
    debugger
    let newState = this.state
    this.props.answer === event.target.className ? this.greenColor() : this.redColor()
  }


  render() {
    const trueStyle = {
      backgroundColor: this.state.trueStyle
    }

    const falseStyle = { 
      backgroundColor: this.state.falseStyle
    }
    return (
      <li>
        {this.props.text}
        <div value={this.props.answer}>
          <button className="true" style={trueStyle} onClick={this.handleTrueClick}>True</button>
          <button className="false" style={falseStyle} onClick={this.handleFalseClick}>False</button>
        </div>
      </li>
    );
  }

}

export default Question;
