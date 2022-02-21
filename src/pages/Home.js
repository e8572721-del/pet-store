import apiResponse from '../apiMock.json';
import treats from '../assets/images/treats.jpg';
import Banner from './../components/Banner/Banner';
import Cards from './../components/Cards/Cards';
import DropDown from './../components/DropDown/DropDown';
import SearchBar from './../components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { pets } = apiResponse;
  const navigate = useNavigate();

  // TODO: 3- delete mock file

  const availablePets = pets.filter((item) => item.available === 'Yes');

  const onBannerCtaClick = (event) => {
    event.preventDefault();
    navigate(`/availablePets`, { state: availablePets });
  };

  return (
    <>
      <h1 className="searchHeading">Pets</h1>

      <SearchBar />
      <DropDown />

      <h2>Results</h2>

      <Cards pets={pets} />

      <Banner
        ctaLabel="See all"
        description="See all pets available for adoption, promote them and get them a home."
        heading="Pets directory"
        onBannerCtaClick={onBannerCtaClick}
        photo={treats}
        photoAlt="Dog treats"
      />
    </>
  );
};

export default Home;
