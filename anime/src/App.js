import React,{useState, useEffect} from 'react';
import LoginRoute from './routes/loginRoute.js';
import { Route } from 'react-router-dom';
import { UserSession } from 'blockstack';
import { appConfig } from './config/appConfig.js';
import Profile from './components/profile.js';
import 'semantic-ui-css/semantic.min.css'
import './sass/index.scss';

// const userSession = new UserSession({
//   appConfig
// }) 
const App = () => {

  const [userSession] = useState(new UserSession({appConfig}))

  console.log(userSession)

  const handleSignIn = (e) => {
    // e.preventDefault();
    userSession.redirectToSignIn();

  }

  const handleSignOut = (e) => {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
    console.log(window.location.origin)
  }

  
  useEffect(() => {

    if (userSession.isSignInPending()) {
        userSession.handlePendingSignIn()
          .then((userData) => {
            if (!userData.username) {
              throw new Error('This app requires a username.')
            }

            window.location = window.location.origin;
          })
          .catch(err => console.error(err))
    }
  }, [userSession])
  
 
  return (
    <div className="App">
      {!userSession.isUserSignedIn() ? 
        <LoginRoute signIn={handleSignIn} />
      :
        <Profile signOut={handleSignOut} userSess={userSession} />
      }
      
    </div>
  );
}

export default App;
