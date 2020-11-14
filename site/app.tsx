import React from 'react';
import { useLocation, useHistory, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import '@vant/touch-emulator'; // 此库的作用是将鼠标事件转换为手势事件
import './app.css';

// 页面过渡动画参考这里https://juejin.im/post/5cb1e4275188251ace1feee9
// 请用高本版的node启动项目

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back'
};

function App() {
  const location = useLocation();
  const history = useHistory();
  return (
    <div>
      <TransitionGroup
        childFactory={child =>
          React.cloneElement(child, {
            classNames: ANIMATION_MAP[history.action]
          })
        }
      >
        <CSSTransition timeout={500} key={location.pathname}>
          <Switch location={location}>{renderRoutes(routes)}</Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
