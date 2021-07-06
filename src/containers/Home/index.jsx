import React, { Suspense } from 'react';

const HomeComponent = React.lazy(() => import('./Home.jsx'));

const HomeLoader = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Home...</div>}>
        <HomeComponent />
      </Suspense>
    </div>
  );
}

export default HomeLoader;
