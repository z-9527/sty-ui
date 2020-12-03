import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

function Home() {
  return (
    <div style={{ background: '#fff', height: '100%' }} className='home'>
      <ul>
        <li>
          <Link to='/button'>button</Link>
        </li>
        <li>
          <Link to='/loading'>loading</Link>
        </li>
        <li>
          <Link to='/Ripple'>Ripple</Link>
        </li>
        <li>
          <Link to='/tabs'>tabs</Link>
        </li>
        <li>
          <Link to='/icon'>icon</Link>
        </li>
        <li>
          <Link to='/index-list'>index-list</Link>
        </li>
        <li>
          <Link to='/nav-bar'>nav-bar</Link>
        </li>
        <li>
          <Link to='/timeline'>timeline</Link>
        </li>
        <li>
          <Link to='/tree-select'>tree-select</Link>
        </li>
        <li>
          <Link to='/popup'>PopupPage</Link>
        </li>
        <li>
          <Link to='/cell'>CellPage</Link>
        </li>
        <li>
          <Link to='/switch'>SwitchPage</Link>
        </li>
        <li>
          <Link to='/radio'>radio</Link>
        </li>
        <li>
          <Link to='/checkbox'>checkbox</Link>
        </li>
        <li>
          <Link to='/swipe'>SwipePage</Link>
        </li>
        <li>
          <Link to='/toast'>ToastPage</Link>
        </li>
        <li>
          <Link to='/action-sheet'>action-sheet</Link>
        </li>
        <li>
          <Link to='/dialog'>dialog</Link>
        </li>
        <li>
          <Link to='/image'>image</Link>
        </li>
        <li>
          <Link to='/pull-refresh'>refresh</Link>
        </li>
        <li>
          <Link to='/picker'>picker</Link>
        </li>
        <li>
          <Link to='/date-picker'>date-picker</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
