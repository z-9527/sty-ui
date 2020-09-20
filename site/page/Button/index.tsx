import React from 'react';
import { Button } from '@/components/index';

function ButtonDemo() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'red',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9999
      }}
    >
      <Button />
    </div>
  );
}
export default ButtonDemo;
