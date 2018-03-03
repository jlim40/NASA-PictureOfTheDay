import React from 'react'
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SpaceNavigator = ({ onPrev, onNext }) => {
  return (
    <div classNames={cx('space-navigator')}>
    </div>
  );
};