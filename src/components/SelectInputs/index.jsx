import React, { useState } from 'react';
import '../../style/select_inputs.css';
import { useDispatch } from 'react-redux';
import {
  handleAmountChange,
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
  handlePlayersChange,
} from '../../redux/action';

const SelectInputs = ({ label, apiData }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    switch (label) {
      case 'Category':
        dispatch(handleCategoryChange(e.target.value));
        break;

      case 'Difficulty':
        dispatch(handleDifficultyChange(e.target.value));
        break;

      case 'Game Type':
        dispatch(handleTypeChange(e.target.value));
        break;

      case 'Number Of Questions':
        dispatch(handleAmountChange(e.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <label htmlFor={label}></label>
      <select
        required
        className="select"
        label={label}
        value={value}
        id={label}
        onChange={handleChange}
      >
        <option disabled className="" value="">
          {label}
        </option>
        {apiData &&
          apiData.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInputs;
