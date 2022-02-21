import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './../Button/Button';
import { ButtonVariant } from './../Button/ButtonVariant';
import './Card.scss';
import useCheckMobile from './../../hooks/useCheckMobile';
import Icon from './../Icon/Icon';

const Card = ({ data, ctaLabel }) => {
  const navigate = useNavigate();
  const { isMobile } = useCheckMobile();

  const { id, photo, ...cleanData } = data;

  const onCardClick = (event) => {
    event.preventDefault();
    navigate(`/pets/${data.id}`, { state: { detail: cleanData, photo: data.photo } });
  };

  return (
    <li className="card">
      <img className="card__photo" src={data.photo} alt={`A ${data.species} named ${data.name}`} />
      <h3>{data.name || 'N/A'}</h3>
      <Button onClick={onCardClick} variant={ButtonVariant.BLUE}>
        {isMobile && <Icon className="button__icon" name="arrow-right" />}
        {!isMobile && <h4>{ctaLabel}</h4>}
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
