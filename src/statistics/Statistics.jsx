import React from 'react';
import PropTypes from 'prop-types';


const Statistics = ({ stats}) => {
    return(
        <ul class="stat-list" >
      {stats.map(stat => (
          
          <li class="item" key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
          </li>
    
          ))}
        
        </ul>
    );

}

export default Statistics;