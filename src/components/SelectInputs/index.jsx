import React, { useState } from 'react';
import '../../style/select_inputs.css';

const SelectInputs = ({ label, apiData }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor={label}></label>
      <select
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
