import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Icon from './components/Icon/Icon';
import useCheckMobile from './hooks/useCheckMobile';
import Home from './pages/Home';
import PetDetail from './pages/PetDetail';
import Pets from './pages/Pets';

const App = () => {
  const { isMobile } = useCheckMobile();
  const headerLogoCondition = isMobile ? 'pet-icon-small' : 'pet-icon';
  const [headerLogo, setHeaderLogo] = useState(headerLogoCondition);

  useEffect(() => {
    setHeaderLogo(headerLogoCondition);
  }, [isMobile, headerLogoCondition]);

  return (
    <div className="app">
      <header className="header">
        <div className="header__logo">
          <Icon name={headerLogo} />
        </div>
      </header>

      <div className="container">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:petId" element={<PetDetail />} />
        </Routes>
      </div>

      <footer className="footer"></footer>
    </div>
  );
};

export default App;
