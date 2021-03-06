import React from 'react';
import { List } from './modules/oh-indicators-list';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
