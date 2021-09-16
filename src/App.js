import { Route, Switch } from "react-router";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./coponents/layout/MainNavigation";

const App = () => {
 //{/*eg: localhost:3000 or mypage.com */}
  return (
    <div>
      <MainNavigation />
 <Switch>  {/*only one of this routes should be active*/ }
         <Route path='/' exact={true}>  {/*to check if all path matches not only / */}
      <AllMeetupsPage />
      </Route>
    <Route path='/favourites'>
      <FavouritesPage />
      </Route>
    <Route path='/new-meetups'>
      <NewMeetupsPage />
      </Route>
      </Switch>
  </div>
  );
}


export default App;
