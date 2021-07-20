import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <img
    style={{ display: 'block', width: '80px', margin: 'auto' }}
    src={spinner}
    alt='Loading...'
  />
);

export default Spinner;
