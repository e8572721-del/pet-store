import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropDown.scss';

const DropDown = ({ options, name, setFilterValue }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOptions = () => setIsOptionsOpen(!isOptionsOpen);

  const setSelected = (option) => {
    setSelectedOption(option);
    setIsOptionsOpen(false);
    setFilterValue(options[option]);
  };

  const handleKeyDown = (event, index) => {
    switch (event.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        event.preventDefault();
        setSelected(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (event) => {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        setIsOptionsOpen(false);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedOption(selectedOption - 1 >= 0 ? selectedOption - 1 : options.length - 1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        setSelectedOption(selectedOption === options.length - 1 ? 0 : selectedOption + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown__container">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={`dropdown__button ${isOptionsOpen ? 'dropdown__button-expanded' : ''}`}
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          {selectedOption !== null ? options[selectedOption] : name}
        </button>
        <ul
          className={`dropdown__options ${isOptionsOpen ? 'dropdown__options-show' : ''}`}
          role="listbox"
          aria-activedescendant={options[selectedOption]}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {options.map((option, index) => (
            <li
              className="dropdown__option"
              id={option}
              key={`dropdown__option-${index}`}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={index}
              onKeyDown={handleKeyDown(index)}
              onClick={() => setSelected(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

DropDown.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  setFilterValue: PropTypes.func,
};

export default DropDown;
