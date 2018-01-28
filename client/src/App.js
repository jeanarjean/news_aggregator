import React, {Component} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import Articles from './Articles';
import './App.css';

class App extends Component {
    state = {articles: []}

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const queryValue = document.getElementById('searchQuery').value;
        fetch(`/search?q=${queryValue}`, {method: 'GET'})
            .then(res => res.json())
        return false;
    }

    componentDidMount() {
        fetch('/search?q=asdasd')
            .then(res => res.json())
            .then(articles => this.setState({articles}))
    }

    render() {
        const {articles} = this.state;
        console.log(articles);

        return (
            <div className="App">
                <div className="container">

                    <SearchBar handleSubmit={this.handleSubmit}/>

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            { articles.articles ? <Articles articles={this.state.articles} /> : null }
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
                        <Input className="search" type="search" name="search" id="searchQuery"
                               placeholder="Search for something"/>
                    </FormGroup>
                </div>
                <div className="col-3"></div>
            </div>
        </form>
    );
};


export default App;
