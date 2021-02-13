import React from 'react';
import PropTypes from 'prop-types';

const StatisticsTitle = ({title, children}) => (
<section class="statistics">
 {title && <h2 class="title">{title}</h2>} 
 {children}
</section>
)

StatisticsTitle.defaultProps = {
    title: '',
    children: [],
};

StatisticsTitle.propTypes = {
    title: PropTypes.string, 
    children: PropTypes.node,
};
  
export default StatisticsTitle;