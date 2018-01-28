import React, {Component} from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
import Articles from './Articles';
import {BeatLoader} from 'react-spinners';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            news: [],
            query: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.loading = true;
        this.setState(this.state);
        const queryValue = document.getElementById('searchQuery').value;
        document.getElementById('searchQuery').value = '';
        fetch(`/search?q=${queryValue}`, {method: 'GET'})
            .then(res => res.json())
            .then(news => {
                this.state.news = news;
                this.state.query = queryValue;
                this.state.loading = false;
                this.setState(this.state);
            });
        return false;
    }

    componentDidMount() {
        fetch('/search?q=asdasd')
            .then(res => res.json())
    }

    render() {
        const {news, query} = this.state;

        return (
            <div className="App">
                <div className="container">

                    <SearchBar handleSubmit={this.handleSubmit}/>
                    <CenterElement>
                        <BeatLoader
                            className="loader"
                            color={'#123abc'}
                            loading={this.state.loading}/>
                    </CenterElement>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            {news.length > 0 ? <Articles query={query} news={this.state.news}/> : null}
                        </div>
                        <div className="col-2"></div>
                    </div>

                </div>
            </div>)
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
                        <Input className="search" type="search" autoComplete="off" name="search" id="searchQuery"
                               placeholder="Search for something"/>
                    </FormGroup>
                </div>
                <div className="col-3"></div>
            </div>
        </form>
    );
};

const CenterElement = (props) => {
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                {props.children}
            </div>
            <div className="col-3"></div>
        </div>
    )
}

export default App;
