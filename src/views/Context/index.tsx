import * as React from 'react';
import Parent from './Parent';
import Child from './Child';

export default () => (
  <>
    <Parent name="1">
      <div>
        <Child />
      </div>
    </Parent>
    <Parent name="2">
      <div>
        <Child />
      </div>
    </Parent>
  </>
);
