import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Article from  './Article';
import './App.css';

class App extends Component {
  
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const queryValue = document.getElementById('searchQuery').value;
    fetch(`/query?q=${queryValue}`, {method: 'GET'})
    .then(res=>res.json())
    .then(res=>console.log(res));
    return false;
  }
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

        <SearchBar handleSubmit={this.handleSubmit}/>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
              <Article/>
              <Article/>
          </div>
          <div className="col-2"></div>
          </div>
          
        </div>
      </div>
    );
  }
}

const SearchBar = (props) => {
  return (
    <form id="searchForm" onSubmit={props.handleSubmit}>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
        <FormGroup>
        <Label for="searchQuery">Search for anything</Label>
        <Input className="search" type="search" name="search" id="searchQuery" placeholder="Search for something" />
        </FormGroup>
        </div>
        <div className="col-3"></div>
      </div>
    </form>
  );
}


export default App;
