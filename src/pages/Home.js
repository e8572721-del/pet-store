import SearchBar from './../components/SearchBar/SearchBar';
import DropDown from './../components/DropDown/DropDown';
import Card from './../components/Card/Card';
import Banner from './../components/Banner/Banner';
import apiResponse from '../apiMock.json';
import treats from '../assets/images/treats.jpg';

const Home = () => {
  // TODO: delete mock file
  const { pets } = apiResponse;

  // TODO: extract cards into their own component

  // TODO: show available pets
  const availablePets = pets.filter((item) => item.available === 'Yes');
  const onBannerCtaClick = (event) => {
    event.preventDefault();
    console.log(availablePets);
  };

  return (
    <>
      <h1 className="searchHeading">Pets</h1>

      <SearchBar />
      <DropDown />

      <h2>Results</h2>

      <ul className="cards">
        {pets.slice(0, 3).map((pet, index) => (
          <Card ctaLabel="View" data={pet} key={`animal-card-${index}`} />
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
    </>
  );
};

export default Home;
