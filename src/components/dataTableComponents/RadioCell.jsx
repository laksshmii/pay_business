import React from 'react';

const RadioCell = ({ isChecked, onChange }) => (
  <input
    type="radio"
    checked={isChecked}
    onChange={onChange}
    style={{ margin: '0 auto' }}
  />
);

export default RadioCell;
