import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import Icon from './components/Icon/Icon';
import useCheckMobile from './hooks/useCheckMobile';
import Home from './pages/Home';
import PetDetail from './pages/PetDetail';
import AvailablePets from './pages/AvailablePets';
import Button from './components/Button/Button';

const App = () => {
  const { isMobile } = useCheckMobile();
  const navigate = useNavigate();

  const headerLogoCondition = isMobile ? 'pet-icon-small' : 'pet-icon';
  const [headerLogo, setHeaderLogo] = useState(headerLogoCondition);

  const onLogoClick = () => navigate('/');

  useEffect(() => {
    setHeaderLogo(headerLogoCondition);
  }, [isMobile, headerLogoCondition]);

  return (
    <div className="app">
      <header className="header">
        <Button onClick={onLogoClick}>
          <Icon name={headerLogo} className="header__logo" />
        </Button>
      </header>

      <div className="container">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/availablePets" element={<AvailablePets />} />
          <Route path="/pets/:petId" element={<PetDetail />} />
        </Routes>
      </div>

      <footer className="footer"></footer>
    </div>
  );
};

export default App;
