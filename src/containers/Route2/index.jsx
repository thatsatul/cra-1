// Component to check lazy loading and chunking

import React, { Suspense } from 'react';

const Route2Component = React.lazy(() => import('./Route2.jsx'));

const Route2Loader = (props) => {
  return (
    <div>
      <Suspense fallback={<div>Loading Route2...</div>}>
        <Route2Component {...props} />
      </Suspense>
    </div>
  );
}

export default Route2Loader;
