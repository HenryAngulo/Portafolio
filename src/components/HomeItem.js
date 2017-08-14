import React from 'react';

function HomeItem(props){
    return(
        <div className="home-item">
            <img src={props.src} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default HomeItem;