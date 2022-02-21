import PropTypes from 'prop-types';
import React from 'react';
import useCheckMobile from './../../hooks/useCheckMobile';
import Button from './../Button/Button';
import { ButtonVariant } from './../Button/ButtonVariant';
import './Banner.scss';
import Icon from './../Icon/Icon';

const Banner = ({ ctaLabel, description, heading, onBannerCtaClick, photo, photoAlt }) => {
  const { isMobile } = useCheckMobile();

  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__heading">{heading}</h1>
        {!isMobile && <p className="banner__description">{description}</p>}
        <Button
          isWide={true}
          onClick={onBannerCtaClick}
          variant={isMobile ? ButtonVariant.BLUE : ButtonVariant.WHITE}
        >
          {isMobile && <Icon className="button__icon" name="arrow-right" />}
          {!isMobile && <h4>{ctaLabel}</h4>}
        </Button>
      </div>
      <img className="banner__photo" src={photo} alt={photoAlt} />
    </div>
  );
};

Banner.propTypes = {
  ctaLabel: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  onBannerCtaClick: PropTypes.func,
  photo: PropTypes.node,
  photoAlt: PropTypes.string,
};

export default Banner;
