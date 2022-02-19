const svgContext = require.context('!@svgr/webpack!../../assets/svg/?inline', false, /\.svg$/);

const Icon = (props) => {
  return svgContext(`./${props.name}.svg`).default();
};

export default Icon;
