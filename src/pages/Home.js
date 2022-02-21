import apiResponse from '../apiMock.json';
import treats from '../assets/images/treats.jpg';
import Banner from './../components/Banner/Banner';
import Cards from './../components/Cards/Cards';
import DropDown from './../components/DropDown/DropDown';
import SearchBar from './../components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Home.scss';

const Home = () => {
  const { pets } = apiResponse;
  const navigate = useNavigate();

  const [filteredPets, setFilteredPets] = useState(pets);

  // TODO: 1- pill filter
  // TODO: 2- fuzzy search
  // TODO: 3- delete mock file

  const availablePets = pets.filter((item) => item.available === 'Yes');

  const onBannerCtaClick = (event) => {
    event.preventDefault();
    navigate(`/availablePets`, { state: availablePets });
  };

  const onSpeciesFilter = (filterValue) => {
    setFilteredPets(pets.filter((item) => item.species === filterValue));
  };

  return (
    <div className="home">
      <h1 className="searchHeading">Pets</h1>

      <SearchBar />

      <ul className="dropDown__list">
        <li>
          <DropDown name="Type" options={['Cat', 'Dog']} setFilterValue={onSpeciesFilter} />
        </li>
      </ul>

      <h2>Results</h2>

      <Cards pets={filteredPets} />

      <Banner
        ctaLabel="See all"
        description="See all pets available for adoption, promote them and get them a home."
        heading="Pets directory"
        onBannerCtaClick={onBannerCtaClick}
        photo={treats}
        photoAlt="Dog treats"
      />
    </div>
  );
};

export default Home;
