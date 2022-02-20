import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './DropDown.scss';

const DropDown = (props) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const optionsList = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedOption(selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedOption(selectedOption === optionsList.length - 1 ? 0 : selectedOption + 1);
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
          {optionsList[selectedOption]}
        </button>
        <ul
          className={`dropdown__options ${isOptionsOpen ? 'dropdown__options-show' : ''}`}
          role="listbox"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {optionsList.map((option, index) => (
            <li
              className="dropdown__option"
              id={option}
              key={`dropdown__option-${index}`}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedThenCloseDropdown(index);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// DropDown.propTypes = {};

export default DropDown;
