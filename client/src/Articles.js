import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';

class Articles extends Component {
    render() {
        console.log(this.props.news);
        return (
            <div>
                {this.props.news.map((article) =>
                    <Article key={article.title} title={article.title} summary={article.summary} image={article.image} />
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
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.summary}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Articles;