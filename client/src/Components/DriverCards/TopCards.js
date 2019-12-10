import React, { Fragment } from 'react';
import SingleCard from './SingleCard';

const TopCards = ({ details }) => {
  return (
    <Fragment>
      <section className="top-cards">
        {details.map((detail, index) => {
          return <SingleCard user={detail} key={index} index={index} />;
        })}
      </section>
    </Fragment>
  );
};

export default TopCards;
