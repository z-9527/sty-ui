import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/index';
import nav from './config';
import './index.less';

function Home() {
  const homeRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const scrollTop = localStorage.getItem('scrollTop');
    homeRef.current.scrollTop = Number(scrollTop) || 0;
    return () => {
      const top = homeRef.current?.scrollTop;
      localStorage.setItem('scrollTop', JSON.stringify(top));
    };
  }, []);

  return (
    <div className='home' ref={homeRef}>
      {nav.map(item => (
        <div key={item.title} className='demo-home-nav'>
          <div className='demo-home-nav__title'>{item.title}</div>
          <div className='demo-home-nav__group'>
            {item.items.map(sub => (
              <Link
                className='demo-home-nav__block'
                key={sub.path}
                to={`/${sub.path}`}
              >
                {sub.title}
                <Icon type='arrow-right' className='demo-home-nav__icon' />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
