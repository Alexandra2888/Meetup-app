import { createContext } from 'react';
import { useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserfavorites] = useState([]);

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };

    return (
        <FavoritesContext value={context}>
            {props.children}
        </FavoritesContext>
    )
}