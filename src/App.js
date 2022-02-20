import { useEffect, useState } from 'react';
import apiResponse from './apiMock.json';
import './App.scss';
import Card from './components/Card/Card';
import DropDown from './components/DropDown/DropDown';
import Icon from './components/Icon/Icon';
import SearchBar from './components/SearchBar/SearchBar';
import useCheckMobile from './hooks/useCheckMobile';

const App = () => {
  const { isMobile } = useCheckMobile();
  const headerLogoCondition = isMobile ? 'pet-icon-small' : 'pet-icon';
  const [headerLogo, setHeaderLogo] = useState(headerLogoCondition);

  // TODO: delete mock file
  const { pets } = apiResponse;

  useEffect(() => {
    setHeaderLogo(headerLogoCondition);
  }, [isMobile, headerLogoCondition]);

  return (
    <div className="app">
      <header className="header">
        <div className="header__inner">
          <div className="header__logo">
            <Icon name={headerLogo} />
          </div>
        </div>
      </header>

      <div className="container">
        <h1 className="searchHeading">Pets</h1>

        <SearchBar />
        <DropDown />

        <h1>Results</h1>

        <ul className="cards">
          {pets.slice(0, 3).map((pet, index) => (
            <Card key={`animal-card-${index}`} />
          ))}
        </ul>
      </div>

      <footer className="footer"></footer>
    </div>
  );
};

export default App;
