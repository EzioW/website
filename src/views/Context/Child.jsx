import * as React from 'react';
import { Context } from './Parent';

class Child extends React.PureComponent {
  render() {
    const { name } = this.context;
    return (
      <div>
        {`receive context name is ${name}`}
      </div>
    );
  }
}

Child.contextType = Context;

export default Child;
