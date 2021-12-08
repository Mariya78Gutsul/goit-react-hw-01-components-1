import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = props => {
  const itemMarkup = props.friends.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));
  return <ul className={s.list}>{itemMarkup}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
    }),
  ).isRequired,
};
export default FriendList;
