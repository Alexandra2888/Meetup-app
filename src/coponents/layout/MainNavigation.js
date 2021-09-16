import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetups'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>My Favourites Meetups</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;