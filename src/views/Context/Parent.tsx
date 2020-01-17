import * as React from 'react';

export interface ParentPropTypes {
  children: React.ReactNode;
  name: string;
}

const Context = React.createContext({});

const Parent = ({ children, name }: ParentPropTypes) => (
  <Context.Provider value={{ name }}>{children}</Context.Provider>
);

export default Parent;

export { Context };
