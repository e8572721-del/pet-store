import './Icon.scss';

const svgContext = require.context('!@svgr/webpack!../../assets/svg/?inline', false, /\.svg$/);

const Icon = ({ className, name }) => {
  return <span className={`icon ${className}`}>{svgContext(`./${name}.svg`).default()}</span>;
};

export default Icon;
