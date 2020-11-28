import React from 'react';
import { Timeline } from '@/components/index';

function TimelineDemo() {
  return (
    <div style={{ background: '#fff' }}>
      <div className='demo-block__title'>基础用法</div>
      <Timeline>
        <Timeline.Item time='2020-09-01'>
          君不见黄河之水天上来，奔流到海不复回。
          君不见高堂明镜悲白发，朝如青丝暮成雪。
        </Timeline.Item>
        <Timeline.Item active time='2020-10-21'>
          人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。
        </Timeline.Item>
        <Timeline.Item icon='like-o' time='2020-11-14'>
          烹羊宰牛且为乐，会须一饮三百杯。 岑夫子，丹丘生，将进酒，杯莫停。
        </Timeline.Item>
        <Timeline.Item time='2020-12-04'>
          与君歌一曲，请君为我倾耳听。 钟鼓馔玉不足贵，但愿长醉不愿醒。
        </Timeline.Item>
      </Timeline>
      <div className='demo-block__title'>隐藏时间</div>
      <Timeline showTime={false}>
        <Timeline.Item time='2020-09-01'>
          君不见黄河之水天上来，奔流到海不复回。
          君不见高堂明镜悲白发，朝如青丝暮成雪。
        </Timeline.Item>
        <Timeline.Item active time='2020-10-21'>
          人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。
        </Timeline.Item>
        <Timeline.Item time='2020-11-14'>
          烹羊宰牛且为乐，会须一饮三百杯。 岑夫子，丹丘生，将进酒，杯莫停。
        </Timeline.Item>
        <Timeline.Item time='2020-12-04'>
          与君歌一曲，请君为我倾耳听。 钟鼓馔玉不足贵，但愿长醉不愿醒。
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
export default TimelineDemo;
