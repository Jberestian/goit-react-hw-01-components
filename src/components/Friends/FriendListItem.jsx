import PropTypes from 'prop-types';

import style from './friendList.module.css';

const FriendsListItem = ({ friends }) => {
  friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className={style.item} key={id}>
        <span className={isOnline ? style.isOnline : style.isOffline}></span>
        <img
          className={style.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={style.name}>{name}</p>
      </li>
    );
  });
};

FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsListItem;
