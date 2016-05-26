import React, {Component} from 'react'

export default class App extends Component {
  state = {
    counter: 0
  };
  
  render() {
    return <div className="application">
      <button onClick={this.handleClick}>Click me</button>
      <span>counter: {this.state.counter}</span>
    </div>
  }
  
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1})
  };
}