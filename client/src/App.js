import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }))
            .then(console.log(this.state));
    }


  render() {


      return (
      <div className="App">
      </div>
    );
  }
}

export default App;
