import * as React from 'react';
import AsyncTest from './AsyncTest';

const { useState } = React;

export default () => {
  const [iniatialValue] = useState(0);
  return (
    <div>
      {`State value is ${iniatialValue}`}
      <AsyncTest />
    </div>
  );
};
