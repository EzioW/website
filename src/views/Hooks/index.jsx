import React, { useState } from 'react';
import AsyncTest from './AsyncTest';

export default () => {
  const [iniatialValue] = useState(0);
  return (
    <div>
      {`State value is ${iniatialValue}`}
      <AsyncTest />
    </div>
  );
};
