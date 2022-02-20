import PropTypes from 'prop-types';
import React from 'react';
import useCheckMobile from './../../hooks/useCheckMobile';
import Icon from './../Icon/Icon';
import './Button.scss';
import { ButtonVariant } from './ButtonVariant';

const Button = ({ children, className, href, onClick, variant }) => {
  const { isMobile } = useCheckMobile();

  // TODO: make button accessible

  return (
    <a
      className={`button ${className} ${variant === ButtonVariant.WHITE ? 'button-white' : ''}`}
      href={href}
      onClick={onClick}
    >
      {isMobile && <Icon className="button__icon" name="arrow-right" />}
      {!isMobile && <h4>{children}</h4>}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([ButtonVariant.BLUE, ButtonVariant.WHITE]).isRequired,
};

export default Button;
