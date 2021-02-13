import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({friends}) => (
    <>
{friends.map(({id, avatar, name, isOnline }) => (
        <li class="item" key={id}>
        <span class="status"></span>
        <img class="avatar" 
        src={avatar} 
        alt="friendAvatar"
        width="48" 
        />
        <p class="name">{name}</p>
      </li>
))}
    </>
)

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

export default FriendListItem;