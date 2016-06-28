/**
 * Created by jmlegrand on 01/06/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import WineApp from './component/WineApp';
import datas from './datas';

import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import InboxPage from './page/InboxPage';


const App = React.createClass({

  getInitialState() {
    console.log(window.location.hash.substr(1));
    return {
      route: window.location.hash.substr(1)
    }
  },

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  },

  render() {
    let Child;
    switch (this.state.route) {
      case '/about':
        Child = AboutPage;
        break;
      case '/inbox':
        Child = InboxPage;
        break;
      default:
        Child = HomePage;
    }
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child />
      </div>
    )
  }

});


ReactDOM.render(
  <App />,
  document.getElementById('main')
);


