import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './views/Home.jsx'
import BookDetails from './views/BookDetails.jsx'
import Navbar from './components/Navbar.jsx'
import Favorites from './views/Favorites.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/books/:id">
          <BookDetails />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
