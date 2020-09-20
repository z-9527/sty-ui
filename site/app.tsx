import React from 'react';
import ButtonDemo from './page/Button';

function App() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ButtonDemo />
      </React.Suspense>
    </div>
  );
}

export default App;
