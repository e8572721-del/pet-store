import PropTypes from 'prop-types';
import React from 'react';
import Button from './../Button/Button';
import { ButtonVariant } from './../Button/ButtonVariant';
import './Card.scss';
import dogImage from './dog.jpeg';

const Card = ({ data }) => {
  // TODO: use card props to display data
  // TODO: cleanup dogImage

  const onCardClick = () => {
    // TODO: route to pet/:id page
  };

  return (
    <li className="card">
      <img className="card__photo" src={dogImage} alt="A cat named Dann" />
      <span className="card__petName">Dann</span>
      <Button href="#" onClick={onCardClick} variant={ButtonVariant.BLUE}>
        View
      </Button>
    </li>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    available: PropTypes.string,
    birthYear: PropTypes.number,
    dateAdded: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    species: PropTypes.string,
  }),
};

export default Card;
