import React from 'react';
import {Card, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const visitar = {
    'ES' : 'Visitar',
    'EN' : 'Visit',
    'FR' : 'Visiter'
}

function CardItem(props){
    return(
        <Card className="card">
            {props.src ?  
            (<CardMedia overlay={<CardTitle title={props.title} />}>
                <img src={props.src} alt={props.title} />
            </CardMedia>) :
            <CardHeader
                title={props.title}
                subtitle={props.subtitle}
                actAsExpander={props.isExpandable}
                showExpandableButton={props.isExpandable}
            />
            }
            {props.children && 
            <CardText expandable={props.isExpandable}>
                {props.children}
                {props.link && 
                <div className="btn-container">
                <RaisedButton label={visitar[props.lang]} href={props.link} target="_blank" primary={true}/>
                </div>}
                {props.sc &&
                <div className="sc-container">
                    <ul>
                    {props.sc.map(element => 
                        <li><a href={element.link} target="_blank">
                        {element.title}
                        </a></li>
                    )}
                    </ul>
                    </div>}                
            </CardText>
            }
        </Card>
    );
}

export default CardItem;