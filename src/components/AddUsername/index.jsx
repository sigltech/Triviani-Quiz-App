import React from 'react';
import { useDispatch } from 'react-redux';
import { handlePlayerChange } from '../../redux/action';

export default function AddUsername({ label }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    // se(e.target.value);
    console.log(e.target.value);
    console.log(label);
    switch (label) {
      case 'Username':
        dispatch(handlePlayerChange(e.target.value));
        break;
      default:
        return;
    }
  };
  return (
    <div id="addUsername" className="addUsername">
      <input
        onSubmit={handleChange}
        required
        type="text"
        label={label}
        placeholder="Player Name"
      />
    </div>
  );
}
