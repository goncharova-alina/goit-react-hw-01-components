import React from 'react';
import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';
import Statistics from './components/statistics/Statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
import StatisticsTitle from './components/statistics/StatisticsTitle/StatisticsTitle';
import friends from './components/friend/friends.json';
import FriendList from './components/friend/friendList/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory/TransactionHistory';
import transactions from './components/transaction/transactions.json';

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

      <StatisticsTitle title="Upload stats">
        <Statistics stats={statisticalData} />
      </StatisticsTitle>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
