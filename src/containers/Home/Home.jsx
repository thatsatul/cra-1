import React from 'react';
import cssStyles from './home.module.css';
import scssStyles from './home.module.scss';

const Home = () => {
  return (
    <div>
      <div className={cssStyles.home_header}>CSS Module</div>
      <div className={scssStyles.home_subheader}>SCSS Module</div>
    </div>
  );
}

export default Home;
