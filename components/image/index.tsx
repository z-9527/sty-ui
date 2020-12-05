import React, { useState, useEffect, useRef } from 'react';
import { classnames } from '../_utils/index';
import { Loading, Icon } from '../index';
import * as CSS from 'csstype';
import './index.less';

export type ObjectFit = CSS.Property.ObjectFit;

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string; // 图片地址
  width?: number | string; // 图片宽度
  height?: number | string; // 图片高度
  round?: boolean; // 是否圆角
  radius?: number | string; // 圆角大小
  lazy?: boolean; // 是否懒加载
  fit?: ObjectFit; // 填充模式
  errorIcon?: React.ReactNode | string; // 失败时提示图标
  onLoad?: (
    event: React.SyntheticEvent<HTMLImageElement, Event> | Event
  ) => unknown;
  onError?: (
    event: React.SyntheticEvent<HTMLImageElement, Event> | Event
  ) => unknown;
  onClick?: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent> | MouseEvent
  ) => unknown;
  className?: string;
  style?: React.CSSProperties;
}
const prefixCls = 'sty-img';

function Image(props: ImageProps) {
  const {
    src,
    width,
    height,
    round,
    radius,
    lazy,
    fit,
    errorIcon,
    onLoad: onPropsLoad,
    onError: onPropsError,
    onClick: onPropsClick,
    className,
    style,
    ...other
  } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>();

  const boxSty: React.CSSProperties = {
    width,
    height,
    borderRadius: radius || (round ? '50%' : 0),
    ...style
  };

  const imgSty: React.CSSProperties = {
    objectFit: fit,
    opacity: loading || error ? 0 : 1
  };

  useEffect(() => {
    if (lazy) {
      if ('IntersectionObserver' in window) {
        const target = imgRef.current;
        let observer = new IntersectionObserver(entries => {
          entries.forEach(item => {
            if (item.isIntersecting) {
              let image = document.createElement('img');
              image.src = target.dataset.src;
              image.onload = onLoad;
              image.onerror = function (event: Event) {
                onError(event);
              };
              image.onclick = onPropsClick;
              target.src = target.dataset.src;
              observer.unobserve(target);
              image = null;
            }
          });
        });
        observer.observe(target);
        return () => {
          observer = null;
        };
      } else {
        console.log('浏览器暂不支持IntersectionObserver属性，请用谷歌');
      }
    }
  }, []);

  function onLoad(
    event: React.SyntheticEvent<HTMLImageElement, Event> | Event
  ) {
    setLoading(false);
    onPropsLoad(event);
  }
  function onError(
    event: React.SyntheticEvent<HTMLImageElement, Event> | Event
  ) {
    setLoading(false);
    setError(true);
    onPropsError(event);
  }

  function renderImage() {
    if (lazy && 'IntersectionObserver' in window) {
      return <img ref={imgRef} data-src={src} style={imgSty} {...other} />;
    }
    return (
      <img
        src={src}
        style={imgSty}
        {...other}
        onLoad={onLoad}
        onError={onError}
        onClick={onPropsClick}
      />
    );
  }
  function renderPlaceholder() {
    if (loading) {
      return (
        <div className={`${prefixCls}-placeholder`}>
          <Loading type='spinner' size={20} />
        </div>
      );
    }
    if (error) {
      return (
        <div className={`${prefixCls}-placeholder`}>
          {typeof errorIcon === 'string' ? (
            <Icon type={errorIcon} size={32} color='#dcdee0' />
          ) : (
            errorIcon
          )}
        </div>
      );
    }
  }

  return (
    <div className={classnames(prefixCls, className)} style={boxSty}>
      {renderImage()}
      {renderPlaceholder()}
    </div>
  );
}

Image.defaultProps = {
  errorIcon: 'photo-fail',
  onLoad: () => undefined,
  onError: () => undefined,
  onClick: () => undefined
};
export default Image;
