import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

const StatisticsTitle = ({ title, children }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </section>
);

StatisticsTitle.defaultProps = {
  title: '',
  children: [],
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default StatisticsTitle;
