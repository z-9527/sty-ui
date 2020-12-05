import React from 'react';
import { Image } from '@/components/index';
import { ImageProps, ObjectFit } from '@/components/image';
import './index.less';

const img = require('./img/cat.jpeg').default;

const fitList: Array<ObjectFit> = [
  'contain',
  'cover',
  'fill',
  'none',
  'scale-down'
];
const tips: Array<{ props: ImageProps; text: string }> = [
  {
    props: {},
    text: '加载中'
  },
  {
    props: { src: 'img', onError: () => console.log('图片加载失败') },
    text: '加载失败'
  }
];

const arr = new Array(10).fill(true);

function ImageDemo() {
  return (
    <div className='img-demo'>
      <div className='demo-block__title'>基础用法</div>
      <div className='list'>
        <Image src={img} onLoad={() => console.log('加载成功')} />
      </div>

      <div className='demo-block__title'>填充模式</div>
      <div className='list'>
        {fitList.map(item => (
          <div key={item} className='item'>
            <Image className='have-border' src={img} fit={item} />
            <div className='text'>{item}</div>
          </div>
        ))}
      </div>

      <div className='demo-block__title'>图片懒加载</div>
      <div className='lazy-list'>
        {arr.map((item, index) => (
          <Image key={index} lazy src={`${img}?index=${index}`} />
        ))}
      </div>

      <div className='demo-block__title'>加载提示</div>
      <div className='list'>
        {tips.map(item => (
          <div key={item.text} className='item'>
            <Image {...item.props} />
            <div className='text'>{item.text}</div>
          </div>
        ))}
      </div>

      <div className='demo-block__title'>自定义提示</div>
      <div className='list'>
        <Image src='img' errorIcon={<div>加载失败</div>} />
      </div>

      <div className='demo-block__title'>圆形图片</div>
      <div className='list'>
        <div className='item'>
          <Image src={img} round />
          <div className='text'>round</div>
        </div>
        <div className='item'>
          <Image src={img} radius={5} />
          <div className='text'>自定义radius</div>
        </div>
      </div>
    </div>
  );
}
export default ImageDemo;
