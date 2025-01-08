import clsx from 'clsx';
import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx('container', css.friendsСontainer)}>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            ></FriendListItem>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
