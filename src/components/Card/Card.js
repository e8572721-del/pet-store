import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './../Button/Button';
import { ButtonVariant } from './../Button/ButtonVariant';
import './Card.scss';

const Card = ({ data, ctaLabel }) => {
  const navigate = useNavigate();

  const { id, photo, ...cleanData } = data;

  const onCardClick = (event) => {
    event.preventDefault();
    navigate(`/pets/${data.id}`, { state: { detail: cleanData, photo: data.photo } });
  };

  return (
    <li className="card">
      <img className="card__photo" src={data.photo} alt={`A ${data.species} named ${data.name}`} />
      <h3>{data.name}</h3>
      <Button href="#" onClick={onCardClick} variant={ButtonVariant.BLUE}>
        {ctaLabel}
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
