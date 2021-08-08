import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import './App.css';
import Route1 from './containers/Route1';
import Route2 from './containers/Route2';
import { TestContext } from './utils/context';
import HOC from './containers/HOC';
import ReactPortal from './containers/Portal';
import MouseTracker from './containers/RenderPropsSample';
import ProductListPage from './containers/ProductListPage';
import CartItemsListPage from './containers/CartItemsListPage';
import TodoAppColumnWise from './containers/TodoFunctionalComp';
import AntiPattern from './components/AntiPattern';
import LanguagesComp from './containers/Languages';

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
        <Link to="/render-props">Render Props</Link>
        <Link to="/product-list">Product List</Link>
        <Link to="/cart-items-list">Cart Items List</Link>
        <Link to="/todos-column">Todos Column With Functional Comp</Link>
        <Link to="/anti-pattern">Anti Pattern</Link>
        <Link to="/languages">Languages</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/route1" render={(ownProps) => <Route1 name1={name} {...ownProps} />} />
          <Route exact path="/hoc" render={(ownProps => <HOC name={name} {...ownProps} />)} />
          <Route exact path="/portal" component={ReactPortal} />
          <Route exact path="/render-props" component={MouseTracker} />
          <Route exact path="/product-list" component={ProductListPage} />
          <Route exact path="/cart-items-list" component={CartItemsListPage} />
          <Route exact path="/todos-column" component={TodoAppColumnWise} />
          <Route exact path="/anti-pattern" component={AntiPattern} />
          <Route exact path="/languages" component={LanguagesComp} />
          <Route path="/route2" render={(ownProps) => <Route2 name1={name} {...ownProps} />} />
        </Switch>
      </main>
    </TestContext.Provider>
  );
}

export default App;
