import React from 'react';
import Profile from './social-profile/Profile';
import user from './social-profile/user.json';
import Statistics from './statistics/Statistics';
import statisticalData from './statistics/statistical-data.json';
import StatisticsTitle from './statistics/StatisticsTitle';
import friends from './friend/friends.json';
import FriendList from './friend/friendList/FriendList';


const App = () => {
  return (
    <div>
      <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <StatisticsTitle title="Upload stats" >
        <Statistics stats={statisticalData} />
      </StatisticsTitle>

      <FriendList friends={friends} />

    </div>

  );
};

export default App;
