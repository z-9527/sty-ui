import React from 'react';
// import Test from './components/Test'

const Test = React.lazy(() => import('@/components/Test'));

function App() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Test />
      </React.Suspense>
    </div>
  );
}

export default App;
