import React from 'react';
import { Switch } from '@/components/index';

function SwitchDemo() {
  // const [value, setValue] = useState(false);
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Switch
        size={100}
        color='slateblue'
        defaultChecked={true}
        onChange={console.log}
        // checked={value}
      />
    </div>
  );
}
export default SwitchDemo;
