import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,
    CardSubtitle, Button } from 'reactstrap';

class Article extends Component {
    render() {
        return(
            <div className="m-3">
                <Card>
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Article;