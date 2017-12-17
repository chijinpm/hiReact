import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import ClickCounter from './ClickCounter';
//import ControlPanel from './ControlPanel';
import ControlPanel from './views/ControlPanel';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ClickCounter/>,document.getElementById('root'));
ReactDOM.render(<ControlPanel/>,document.getElementById('root'));
registerServiceWorker();
