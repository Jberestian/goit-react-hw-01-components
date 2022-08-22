import PropTypes from 'prop-types';
import FriendsListItem from 'components/Friends/FriendListItem';

import style from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      <FriendsListItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
