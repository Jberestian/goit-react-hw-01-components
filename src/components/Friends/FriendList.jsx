import PropTypes from 'prop-types';
import FriendsListItem from 'components/Friends/FriendListItem';

import style from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
