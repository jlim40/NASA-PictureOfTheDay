import React from 'react'
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ViewTemplate = ({ viewer, spaceNavigator }) => {
  return (
    <div classNames={cx('viewer-template')}>
    </div>
  );
};