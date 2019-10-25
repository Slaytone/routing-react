import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';

const mapping = {
    '#about':
            <div>
                About us (<a href='#'> Link on main </a>)
            </div> ,
    '#news':
            <div>
                News (<a href='#'> Link on main </a>)
            </div> ,
    '*':
        <div> Main Page
            <br />
            <a href='#about'> About us </a>
            <br />
            <a href='#news'> news </a>
        </div>

}

//ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h1>React</h1>,
//         document.getElementById('root'));

ReactDOM.render(<Router mapping={mapping}/>, document.getElementById('root'));



