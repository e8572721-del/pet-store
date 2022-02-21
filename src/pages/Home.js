import apiResponse from '../apiMock.json';
import treats from '../assets/images/treats.jpg';
import Banner from './../components/Banner/Banner';
import Cards from './../components/Cards/Cards';
import DropDown from './../components/DropDown/DropDown';
import SearchBar from './../components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Home.scss';
import { ButtonVariant } from './../components/Button/ButtonVariant';
import Button from '../components/Button/Button';

const Home = () => {
  const { pets } = apiResponse;
  const navigate = useNavigate();

  const [resultedPets, setResultedPets] = useState(pets);

  // TODO: 2- fuzzy search
  // TODO: 3- delete mock file

  const availablePets = pets.filter((item) => item.available === 'Yes');

  const onBannerCtaClick = (event) => {
    event.preventDefault();
    navigate(`/availablePets`, { state: availablePets });
  };

  const onSpeciesFilter = (filterValue) => {
    setResultedPets(pets.filter((item) => item.species === filterValue));
  };

  const onDateFilterClick = () => {
    const petCopy = [...pets];
    const sortedPets = petCopy.sort((firstPet, secondPet) => {
      const firstPetDateAdded = firstPet.dateAdded.split('-').reverse().join();
      const secondPetDateAdded = secondPet.dateAdded.split('-').reverse().join();
      return firstPetDateAdded > secondPetDateAdded
        ? -1
        : firstPetDateAdded < secondPetDateAdded
        ? 1
        : 0;
    });

    setResultedPets(sortedPets);
  };

  return (
    <div className="home">
      <h1 className="searchHeading">Pets</h1>

      <SearchBar />

      <ul className="filter__list">
        <li>
          <DropDown name="Type" options={['Cat', 'Dog']} setFilterValue={onSpeciesFilter} />
        </li>
        <li>
          <Button onClick={onDateFilterClick} variant={ButtonVariant.GREY}>
            <span>Latest added</span>
          </Button>
        </li>
      </ul>

      <h2>Results</h2>

      <Cards pets={resultedPets} />

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
