import React from 'react';
import PropTypes from 'prop-types';
import './Cards.scss';
import Card from './../Card/Card';

const Cards = ({ pets }) => {
  return (
    <ul className="cards">
      {pets.map((pet, index) => (
        <Card ctaLabel="View" data={pet} key={`animal-card-${index}`} />
      ))}
    </ul>
  );
};

Cards.propTypes = {
  pets: PropTypes.arrayOf(Card.propTypes.data),
};

export default Cards;
