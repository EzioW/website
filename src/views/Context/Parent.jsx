import * as React from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

const Parent = ({ children, name }) => (
  <Context.Provider value={{ name }}>{children}</Context.Provider>
);

Parent.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default Parent;

export { Context };
