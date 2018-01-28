import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle,
    CardSubtitle
} from 'reactstrap';

class Articles extends Component {
    render() {
        return (
            <div>
                {this.props.articles.articles.map((article) =>
                    <Article key={article.title} title={article.title} summary={article.summary} image={article.image} />
                )}
                <h1> criss</h1>
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