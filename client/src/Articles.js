import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle,
     CardFooter
} from 'reactstrap';
import './Articles.css';
import Moment from 'react-moment';

class Articles extends Component {
    render() {
        console.log(this.props.news);
        return (
            <div>
                {this.props.news.map((article) =>
                    <Article key={article.title} title={article.title} summary={article.summary} image={article.image} url={article.url} tones={article.tones} date={article.date} />
                )}
            </div>
        );
    }
}

const Article = (props) => {

   var emotionToColor = function(emotion) {
        if(emotion==="Joy"){
            return "success";
        }else if (emotion==="Anger"){
            return "danger";
        }else if (emotion==="Fear"){
            return "dark";
        }else if (emotion==="Confident"){
            return "primary";
        }else if (emotion==="Sadness"){
            return "warning";
        }else if (emotion==="Analytical"){
            return "secondary";
        }else{
            return "info";
        }
    }
        
    return (
        <div className="m-3">
            <Card>
                <CardBody>
                    <a href={props.url} className="link">
                        <CardTitle>{props.title}</CardTitle>
                    </a>
                    <CardImg src={props.image}/>
                    <CardText className="summary">{props.summary}</CardText>
                    <CardText className="date">
                        <Moment className="date" format="ddd MMM DD YYYY">{props.date}</Moment>
                    </CardText>
                    {((props)=>{
                        if(props.tones.length){
                            return (
                            <CardFooter>
                            {props.tones.map((tone) =>
                                <BigBadge key={tone.tone_name} color={emotionToColor(tone.tone_name)}>{tone.tone_name}</BigBadge>
                            )}
                            </CardFooter>);
                        }else{
                            return (<div></div>)
                        }
                    })(props)}
                </CardBody>
            </Card>
        </div>
    );
};

const BigBadge = (props) => {
    const badgeStyle = {
        display: "inline"
    };
    return (
        <h4 style={badgeStyle}>
            <span className = {`badge badge-${props.color} badge-pill`}>
                {props.children}
            </span>
            {'\u00A0'}
        </h4>
        
    )
};

export default Articles;