import React, {Component} from 'react';
import {FormGroup, Input} from 'reactstrap';
import Articles from './Articles';
import {BeatLoader} from 'react-spinners';
import request from 'browser-request';
import ReactAudioPlayer from 'react-audio-player';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            news: [],
            query: "",
            audioPath: "",
            firstLanding: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({loading: true});
        const queryValue = document.getElementById('searchQuery').value;
        document.getElementById('searchQuery').value = '';
        fetch(`/search?q=${queryValue}`, {method: 'GET'})
            .then(res => res.json())
            .then(news => {
                let self = this;
                this.setState({news: news, query: queryValue, loading: false, firstLanding: false});

                let payload = {
                    text: this.getSummariesTitles(news)
                }

                if (payload.text !== "") {
                    request.post({method: 'POST', url: '/speech', body:JSON.stringify(payload), json:true}, function(err, response, body){
                        if(err){
                            console.error(err);
                        }
                        self.setState({audioPath: body.fileName});
                    });
                }
            });
        return false;
    }

    getSummariesTitles(news) {
        return news.map(article => article.title).join(' ');
    }

    componentDidMount() {
    }

    render() {
        const {news, query, audioPath, firstLanding} = this.state;
        var articlesBlock = news.length > 0 ? <Articles query={query} news={this.state.news}/> : null;
        var noData = null;
        if (!firstLanding && news.length === 0) {
            noData = <div>No recent news are available for this keyword</div>;
        } else {
            noData = null;
        }

        return (
            <div className="App">
                <div className="container">
                    <img src="/saladBowl.jpg" width="400px"></img>
                    <h4 className="text-muted">Just toss my shit up</h4>
                    <br/>
                    <SearchBar handleSubmit={this.handleSubmit}/>
                    <CenterElement>
                        <BeatLoader
                            className="loader"
                            color={'#36bc37'}
                            loading={this.state.loading}/>
                    </CenterElement>
                    <CenterElement>
                        {(()=>{
                            if(audioPath){
                                return (
                                    <ReactAudioPlayer
                                    src={`http://localhost:5000/${audioPath}`}
                                    controls
                                    />) 
                            }
                        })()
                        }
                    </CenterElement>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            {articlesBlock}
                            {noData}
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
