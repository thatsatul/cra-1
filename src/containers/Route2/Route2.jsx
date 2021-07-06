import React, { Suspense } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

const Comp1 = React.lazy(() => import('./components/Comp1'));
const Comp2 = React.lazy(() => import('./components/Comp2'));

const Route2 = (props) => {
  const { match } = props;
  return (
    <section>
      <Link to={`${match.url}/comp1`}>Comp1</Link>
      <Link to={`${match.url}/comp2`}>Comp2</Link>
      <Suspense fallback={<div>Loading comps...</div>}>
        <Switch>
          <Route exact path={`${match.url}/comp1`} component={Comp1} />
          <Route exact path={`${match.url}/comp2`} component={Comp2} />
        </Switch>
      </Suspense>
    </section>
  );
}

export default Route2;
