import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';
import { ButtonVariant } from './ButtonVariant';
import classNames from 'classnames';

const Button = ({ children, isWide, onClick, variant }) => {
  return (
    <button
      className={classNames('button', {
        '-white': variant === ButtonVariant.WHITE,
        '-blue': variant === ButtonVariant.BLUE,
        '-grey': variant === ButtonVariant.GREY,
        '-wide': isWide,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  isWide: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([ButtonVariant.BLUE, ButtonVariant.GREY, ButtonVariant.WHITE]),
};

export default Button;
