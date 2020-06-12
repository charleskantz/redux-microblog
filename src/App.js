import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTitlesAPI } from './actions';

import Header from './Header';
import Routes from './Routes';

/** Microblog app, allows a user to create and comment on a collection of posts
 *    - useEffect grabs updated title list from redux
*/
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTitlesAPI());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;