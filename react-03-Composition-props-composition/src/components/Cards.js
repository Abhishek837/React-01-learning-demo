import './Cards.css'

function Cards(props){
    //children props
    const classes='card '+props.className;
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default Cards;