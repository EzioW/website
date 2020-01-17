import * as React from 'react';

const { useState } = React;

const fetch = new Promise(resolve => {
  setTimeout(() => {
    resolve('promise result');
  }, 1000);
});

const AsyncTest = () => {
  const [state, setState] = useState('before');

  fetch.then((result: string) => setState(result));

  return <div>{`current string is ${state}`}</div>;
};

export default AsyncTest;
