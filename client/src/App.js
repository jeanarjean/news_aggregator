import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
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
        <div className="container">
        <form idc="searchForm">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
            <FormGroup>
            <Label for="searchQuery">Email</Label>
            <Input className="search" type="search" name="search" id="searchQuery" placeholder="Search for something" />
            </FormGroup>
            </div>
            <div className="col-3"></div>
          </div>
        </form>
        </div>
        
      </div>
    );
  }
}

export default App;
