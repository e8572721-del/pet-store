import { useLocation } from 'react-router-dom';
import './PetDetail.scss';

const PetDetail = () => {
  const { state } = useLocation();
  const { detail, photo } = state;

  if (state) {
    return (
      <div className="petDetail">
        <img
          className="petDetail__photo"
          src={photo}
          alt={`A ${detail.species} named ${detail.name}`}
        />

        <ul className="petDetail__content">
          {Object.entries(detail).map(([key, value], index) => (
            <li key={`petDetail-${index}`}>
              {key} - {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default PetDetail;
