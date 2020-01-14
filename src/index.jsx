import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import ReactDom from 'react-dom';
import App from 'components/App';

const HotApp = hot(App);

ReactDom.render(<HotApp />, document.getElementById('app'));
