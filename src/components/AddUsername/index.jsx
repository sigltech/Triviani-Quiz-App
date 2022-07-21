<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handlePlayerChange } from "../../redux/action";

export default function AddUsername({ user, setUser, handleInputChange }) {
  return (
    <div id="addUsername" className="addUsername">
      <input
        role="AddUsername"
        onChange={handleInputChange}
        id="player1"
        required
        type="text"
>>>>>>> 2c92e2ee72a39bb5524b7a4c8e2f2ece60155a88
        placeholder="Player Name"
      />
    </div>
  );
}
