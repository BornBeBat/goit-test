import React from 'react';

import s from './Home.module.css';

import follov from 'img/follow.webp';

const Home = () => {
  return (
    <section className={s.container}>
      <img src={follov} alt="card preview" width={420} />
      <div className={s.introWrapper}>
        <h1 className={s.title}>Go It test task</h1>
        <p className={s.text}>
          The following technologies were used in this task:
        </p>
        <ul className={s.techList}>
          <li>Redux Toolkit</li>
          <li>Java Script</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <p className={s.text}>Implemented:</p>
        <ul className={s.techList}>
          <li>User card according to the layout</li>
          <li>Load more button</li>
          <li>Go back button</li>
          <li>Follow button</li>
          <li>Pagination</li>
          <li>Routing</li>
          <li>Filter</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
