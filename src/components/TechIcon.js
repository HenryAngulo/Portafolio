import React from 'react';

function TechIcon({children, name}){
    return(
        <div className={`tech-icon ${name}`}>
            {children}
            <span>{name}</span>
        </div>
    )
}

export default TechIcon;