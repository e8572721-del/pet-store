import './App.scss';
import Icon from './components/Icon/Icon';
import useCheckMobile from './hooks/useCheckMobile';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import DropDown from './components/DropDown/DropDown';

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
      </div>

      <footer className="footer"></footer>
    </div>
  );
};

export default App;
