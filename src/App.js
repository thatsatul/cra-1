import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import './App.css';
import Route1 from './containers/Route1';
import Route2 from './containers/Route2';
import { TestContext } from './utils/context';

function App() {
  const [name, setName] = useState('Atul Anand');
  return (
    <TestContext.Provider value={{ name }}>
      <main>
        <div>
          <div className="App-header" onClick={() => setName(name === 'Atul Anand' ? 'Kumud Kumari' : 'Atul Anand')}>
            <div>{name} app</div>
            <div>Context implementation: See Route 2 ... Comp 2</div>
          </div>
        </div>
        <Link to="/">Home</Link>
        <Link to="/route1">Route1</Link>
        <Link to="/route2">Route2</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/route1" component={Route1} />
          <Route path="/route2" component={Route2} />
        </Switch>
      </main>
    </TestContext.Provider>
  );
}

export default App;
