import React from 'react';
import cssStyles from './home.module.css';
import scssStyles from './home.module.scss';
// import './home.css';

const Home = () => {
  return (
    <div>
      <div className={cssStyles.home_header}>CSS Module</div>
      <div className={scssStyles.home_subheader}>SCSS Module</div>
    </div>
  );
}
// const Home = () => <div className="home_header">Home 1</div>;

export default Home;
