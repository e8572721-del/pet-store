import './Icon.scss';
import PropTypes from 'prop-types';

const svgContext = require.context('!@svgr/webpack!../../assets/svg/?inline', false, /\.svg$/);

const Icon = ({ className, name }) => {
  return <span className={`icon ${className}`}>{svgContext(`./${name}.svg`).default()}</span>;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Icon;
