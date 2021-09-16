import classes from './MeetupItem.module.css';

const MeetupItem = (props) => {
    return (
        <li classes={classes.item}>
            <div classes={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div class={classes.content}>
                <h3>{ props.title}</h3>
                <address>{ props.adress}</address>
                <p>{props.description}</p>
            </div>
            <div>
                <buton class={classes.actions}>To Favourites</buton>
            </div>
</li>
    )
}

export default MeetupItem;