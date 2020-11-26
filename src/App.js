import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SigninForm from './pages/SignInForm'
import CssTransformation from './pages/CssTransformation'
import PokemonDataFetch from './pages/PokemonDataFetch'
import LibraVsFram from './pages/LibraVsFram'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin-form" component={SigninForm} />
        <Route path="/css-transformation" component={CssTransformation} />
        <Route path="/pokemon-data-fetch" component={PokemonDataFetch} />
        <Route path="/LibraVsFram" component={LibraVsFram} />
      </Switch>
    </Router>
  );
}

export default App;
