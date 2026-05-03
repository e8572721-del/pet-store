import { pets } from './api.json';

const fetchData = () => {
  // Simulate async API behavior while using local fixture data.
  return Promise.resolve(pets);
};

export default fetchData;
