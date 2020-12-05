import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./Components/Header";
import CardGroup from "./Components/CardGroup";
import MoviePage from "./Components/MoviePage";
import './style.css';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path='/' exact={true}>
            <CardGroup />
          </Route>
          <Route path='/movies/:id'>
            <MoviePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
