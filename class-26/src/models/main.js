import React from 'react';

class Main extends React.Component {
    constructor(props) {
      super(props);
      // initial state
      this.state = {
        counter: 0
      }
    }
    handleClickOne = e => {
      e.preventDefault();
      let counter = this.state.counter;
      counter++;
      this.setState({ counter });
    }
    handleClickTwo = e => {
      e.preventDefault();
      let counter = this.state.counter;
      counter--;
      this.setState({ counter });
    }
    render() {
      return (
        <section>
          <h3>{this.state.counter}</h3>
          <button onClick={this.handleClickOne}>Up</button>
          <button onClick={this.handleClickTwo}>Down</button>
        </section>
      )
    }
  }
export default Main;