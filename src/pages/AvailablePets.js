import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cards from './../components/Cards/Cards';

const AvailablePets = () => {
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Cards pets={state} />;
};

export default AvailablePets;
