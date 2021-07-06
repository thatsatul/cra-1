import React, { Suspense } from 'react';

const Route1Component = React.lazy(() => import('./Route1.jsx'));

const Route1Loader = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Route1...</div>}>
        <Route1Component />
      </Suspense>
    </div>
  );
}

export default Route1Loader;
