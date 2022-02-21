import './Icon.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const svgContext = require.context('!@svgr/webpack!../../assets/svg/?inline', false, /\.svg$/);

const Icon = ({ className, name }) => {
  return (
    <span className={classNames('icon', className)}>{svgContext(`./${name}.svg`).default()}</span>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Icon;
