import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Article from  './Article';
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
        <form id="searchForm">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
            <FormGroup>
            <Label for="searchQuery">Search something</Label>
            <Input className="search" type="search" name="search" id="searchQuery" placeholder="Search for something" />
            </FormGroup>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <Article/>
              <Article/>
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
