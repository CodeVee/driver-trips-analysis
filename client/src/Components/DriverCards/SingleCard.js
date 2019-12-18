import React, { Fragment } from 'react';
import Medal from '../resources/icons8_medal_127px.png';
import Another from '../resources/icons8_medal_first_place_127px.png';
import User from '../resources/icons8_user_16px.png';
import Cash from '../resources/icons8_cash_in_hand_16px.png';
import Card from '../resources/icons8_card_payment_16px.png';
import Car from '../resources/icons8_car_16px.png';

const SingleCard = ({ index, user }) => {
  const text1 = ' Earner';
  const text0 = 'Top Driver';

  const { name, cash, card, trip, amount } = user;

  return (
    <Fragment>
      <div className="single-card">
        <div className="card-container">
          <h3>{index === 0 ? text0 : text1}</h3>
          <div className="icon-text">
            <div className="icon">
              <img src={index === 0 ? Medal : Another} alt="Prize" />
            </div>

            <div className="details">
              <p>
                <img src={User} alt="Name" /> {name}
              </p>
              <p>
                <img src={Cash} alt="Cash Trip" /> {cash} Cash Trips
              </p>
              <p>
                <img src={Card} alt="Card Trip" /> {card} Non Cash Trips
              </p>
              <p>
                <img src={Car} alt="Trips Taken" /> {trip} Trips
              </p>
              <p>₦ {amount}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleCard;
