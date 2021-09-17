import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';
import SignIn from './components/signIn/SignIn'
import Register from './components/register/Register.';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;