import React, { ComponentType } from 'react';
import { Loading } from '@/components/index';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  background: '#fff'
};

const DefaultLoading = () => {
  return (
    <div style={style}>
      <Loading vertical>加载中...</Loading>
    </div>
  );
};

// 这个函数主要是解决路由懒加载和路由动画第一次不生效的

/**
  为什么没有使用React.lazy
  在使用React.lazy时发现第一次进入路由时并没有切换动画，虽然我用在懒加载的代码外层包裹了div，但是Suspense的fallback
  会在第一次加载时出现

  <loading>
    <div style={style}>
      懒加载组件
    </div>
  </loading>

  为什么下面函数的loading不会影响路由动画

  <div style={style}>
    是否加载 ? 懒加载组件 : loading
  </div>

  可以看到当路由加载时懒加载组件和loading都在我包裹的div里，这里的div会正常切换路由动画

 */

function asyncComponent(importComponent, Loading = <DefaultLoading />) {
  class AsyncComponent extends React.Component<
    {},
    { component: ComponentType }
  > {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });

      // 模拟网络延时，可以很清楚的看到组件加载动画
      // setTimeout(() => {
      //   this.setState({
      //     component: component
      //   });
      // }, 2000);
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : Loading;
    }
  }

  return AsyncComponent;
}

export default asyncComponent;
