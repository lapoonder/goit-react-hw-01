import React from 'react';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListIten = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css.friend)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p className={clsx(css.online)}>Online</p>
      ) : (
        <p className={clsx(css.ofline)}>Offline</p>
      )}
    </div>
  );
};

export default FriendListIten;
