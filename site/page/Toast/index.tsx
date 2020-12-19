import React from 'react';
import { Toast, Button } from '@/components/index';
import { ToastProps } from '@/components/toast';
import './index.less';

const config: Array<ToastProps> = [
  {
    content: '文字提示',
    onClose: () => console.log('onClose'),
    afterClose: () => console.log('afterClose')
  },
  { content: '这是一条长文字提示，超过一定字数就会换行' },
  { content: '加载中...', type: 'loading' },
  { content: '成功文案', type: 'success' },
  { content: '失败文案', type: 'fail' },
  { content: '自定义图标', icon: 'like-o' },
  { content: '自定义图标', icon: 'cart-o' }
];
function ToastDemo() {
  function showToast(param) {
    Toast[param.type || 'info'](param);
  }

  function showToast2() {
    let secondsToGo = 5;
    const { close, update } = Toast.info({
      content: '5秒后手动销毁',
      duration: 0
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      update({
        content: `${secondsToGo}秒后手动销毁`
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      close();
    }, 5000);
  }
  return (
    <div className='toast-demo'>
      <div className='demo-block__title'>基础用法</div>
      <div style={{ padding: '0 16px' }}>
        <Button inline onClick={() => showToast(config[0])}>
          文字提示
        </Button>
        <Button inline onClick={() => showToast(config[1])}>
          长文字提示
        </Button>
      </div>

      <div className='demo-block__title'>加载提示</div>
      <div style={{ padding: '0 16px' }}>
        <Button inline onClick={() => showToast(config[2])}>
          加载提示
        </Button>
      </div>
      <div className='demo-block__title'>成功失败</div>
      <div style={{ padding: '0 16px' }}>
        <Button inline type='primary' onClick={() => showToast(config[3])}>
          成功提示
        </Button>
        <Button inline type='warning' onClick={() => showToast(config[4])}>
          失败提示
        </Button>
      </div>
      <div className='demo-block__title'>自定义图标</div>
      <div style={{ padding: '0 16px' }}>
        <Button inline onClick={() => showToast(config[5])}>
          自定义图标
        </Button>
        <Button inline onClick={() => showToast(config[6])}>
          自定义图标
        </Button>
      </div>
      <div className='demo-block__title'>手动销毁和更新</div>
      <div style={{ padding: '0 16px' }}>
        <Button inline onClick={showToast2}>
          手动销毁
        </Button>
      </div>
    </div>
  );
}
export default ToastDemo;
