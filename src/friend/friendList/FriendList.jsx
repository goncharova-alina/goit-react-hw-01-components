import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../friendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        <FriendListItem friends={friends} />
    </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

export default FriendList;
