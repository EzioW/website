import React from 'react';

const pages = ['Hooks', 'Context', 'Test'];

export default pages.map(name => ({
  path: `/${name.toLowerCase()}`,
  component: React.lazy(() => import(`views/${name}`)),
}));
