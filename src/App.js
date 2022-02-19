import './App.scss';
import Icon from './components/Icon/Icon';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header__inner">
          <span className="header__logo">
            <Icon name="pet-icon" />
          </span>
        </div>
      </header>

      <h1>Pets</h1>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
