import React from 'react'
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Viewer = ({ mediaType, url, loading }) => {
  return (
    <div classNames={cx('viewer')}>
        mediaType === 'image' ? (
          <img onClick={() => window.open(url)} src={url} alt="space"/>
        ) : (
          <div/>
        )
    </div>
  );
};

export default Viewer;