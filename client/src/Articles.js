import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';
import './Articles.css';

class Articles extends Component {
    render() {
        console.log(this.props.news);
        return (
            <div>
                {this.props.news.map((article) =>
                    <Article key={article.title} title={article.title} summary={article.summary} image={article.image} url={article.url} />
                )}
                <h1> {this.props.query}</h1>
            </div>
        );
    }
}

const Article = (props) => {
    return (
        <div className="m-3">
            <Card>
                <CardBody>
                    <CardImg src={props.image}/>
                    <a href={props.url} className="link">
                        <CardTitle>{props.title}</CardTitle>
                    </a>
                    <CardText className="summary">{props.summary}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Articles;