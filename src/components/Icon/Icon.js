import './Icon.scss';

const svgContext = require.context('!@svgr/webpack!../../assets/svg/?inline', false, /\.svg$/);

const Icon = (props) => {
  return (
    <span className={`icon ${props.className}`}>{svgContext(`./${props.name}.svg`).default()}</span>
  );
};

export default Icon;
