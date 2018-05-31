// NOTE: from http://stellarcode.co/

import React, { Component } from 'react';
import '../styles/App.css';

import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';
import Home from './HomeComponent';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

// Put in this component what you want to be shown on each page (e.g. nav bar)
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/hello">Hello</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Books</Link></li>
            </ul>
            <hr/>
            {/* Router inject the HISTORY API OBJECT in its children as props */}
            {/*
              History API object contains:
              HISTORY,
              LOCATION,
              MATCH
            */}
            <Route exact path="/" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/about" component={About} />
            <Route path="/books" component={Books} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;

// NOTE:
// The History API is an object that lets us manage the current location via history.location as well as previous locations. Think of the location property of the object as an array. The current location is the last item on the array and we manipulate the array through methods such as history.push() orhistory.replace. Whatever manipulation is made on the array will trigger a page transition to the current location. This is what happens behind the scene when using Link and Redirect component as we’ll see soon.
