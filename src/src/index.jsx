import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import Comp2 from './comp2.jsx';
import Comp3 from './comp3.jsx';

render(<App/>, document.querySelector("#app"));
render(<Comp2/>,document.getElementById("myComponent"));
render(<Comp3/>,document.getElementById("myComponentNew"));