import { useEffect, useState } from 'react';
import apiResponse from './apiMock.json';
import './App.scss';
import Card from './components/Card/Card';
import DropDown from './components/DropDown/DropDown';
import Icon from './components/Icon/Icon';
import SearchBar from './components/SearchBar/SearchBar';
import useCheckMobile from './hooks/useCheckMobile';
import Banner from './components/Banner/Banner';
import treats from './assets/images/treats.jpg';

const App = () => {
  const { isMobile } = useCheckMobile();
  const headerLogoCondition = isMobile ? 'pet-icon-small' : 'pet-icon';
  const [headerLogo, setHeaderLogo] = useState(headerLogoCondition);

  // TODO: delete mock file
  const { pets } = apiResponse;

  useEffect(() => {
    setHeaderLogo(headerLogoCondition);
  }, [isMobile, headerLogoCondition]);

  // TODO: extract cards into their own component

  // TODO: show available pets
  const availablePets = pets.filter((item) => item.available === 'Yes');
  const onBannerCtaClick = (event) => {
    event.preventDefault();
    console.log(availablePets);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header__logo">
          <Icon name={headerLogo} />
        </div>
      </header>

      <div className="container">
        <h1 className="searchHeading">Pets</h1>

        <SearchBar />
        <DropDown />

        <h2>Results</h2>

        <ul className="cards">
          {pets.slice(0, 3).map((pet, index) => (
            <Card key={`animal-card-${index}`} />
          ))}
        </ul>

        <Banner
          ctaLabel="See all"
          description="See all pets available for adoption, promote them and get them a home."
          heading="Pets directory"
          onBannerCtaClick={onBannerCtaClick}
          photo={treats}
          photoAlt="Dog treats"
        />
      </div>

      <footer className="footer"></footer>
    </div>
  );
};

export default App;
