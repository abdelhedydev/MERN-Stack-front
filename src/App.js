import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Users from './components/users';
import Photos from './components/photos';
import Menu from './components/partials/Menu';


class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Menu />
          <Route path="/" component={Welcome} exact/>
          <Route path="/users" component={Users} />
          <Route path="/photos" component={Photos} />
        </div>
        </BrowserRouter>

      </div>

    );
  }
}

export default App;
