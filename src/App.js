import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import './App.css';
import Route1 from './containers/Route1';
import Route2 from './containers/Route2';
import { TestContext } from './utils/context';
import HOC from './containers/HOC';
import ReactPortal from './containers/Portal';

function App() {
  const [name, setName] = useState('Atul Anand');
  return (
    <TestContext.Provider value={{ name }}>
      <main>
        <div>
          <div className="App-header" onClick={() => setName(name === 'Atul Anand' ? 'Kumud Kumari' : 'Atul Anand')}>
            <div>{name} app</div>
            <div>Context implementation: See Route 2 ... Comp 2 (Click here)</div>
          </div>
        </div>
        <Link to="/">Home</Link>
        <Link to="/route1">Route1</Link>
        <Link to="/route2">Route2</Link>
        <Link to="/hoc">HOC</Link>
        <Link to="/portal">Portal</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/route1" render={(ownProps) => <Route1 name1={name} {...ownProps} />} />
          <Route exact path="/hoc" render={(ownProps => <HOC name={name} {...ownProps} />)} />
          <Route path="/portal" component={ReactPortal} />
          <Route path="/route2" render={(ownProps) => <Route2 name1={name} {...ownProps} />} />
        </Switch>
      </main>
    </TestContext.Provider>
  );
}

export default App;
