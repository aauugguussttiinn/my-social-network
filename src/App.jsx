import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from 'pages/Home/Home';
// import About from 'pages/About/About';
// import Works from 'pages/Works/Works';
// import Work from 'components/Work/Work';
import NotFound from 'pages/NotFound/NotFound';

const App = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" exact component={About} /> */}
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;