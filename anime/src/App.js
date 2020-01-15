import React from 'react';
import loginRoute from './routes/loginRoute.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={loginRoute} />
    </div>
  );
}

export default App;
