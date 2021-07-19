import React from "react";
import './Cards.css'

const Cards = (props) => {
    //children props
    const classes='card '+props.className;
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default Cards;