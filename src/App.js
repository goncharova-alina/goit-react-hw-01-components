import React from 'react';
import Profile from './social-profile/Profile';
import user from './social-profile/user.json';
import Statistics from './statistics/Statistics';
import statisticalData from './statistics/statistical-data.json';

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

      <Statistics 
      title="Upload stats" 
      stats={statisticalData} 
      />
    
    </div>

  );
};

export default App;
