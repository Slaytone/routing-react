import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './menu/menu';
import News from "./news/news";
import Blog from "./blog/blog";
import {BrowserRouter as Router, Route} from "react-router-dom";


//ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h1>React</h1>,
//         document.getElementById('root'));

ReactDOM.render(
    <Router>
        <Menu />
        <Route exact path="/" render={() =>
            <h1> Main Page </h1>}
        />
        <Route exact path="/news" component={News}/>
        <Route path="/news/:id" render={({match}) => {
            console.log(match.params.id);
            return (<h1>{match.params.id}</h1>)
        }}
        />
        <Route path="/blog" component={Blog}/>
    </Router>,
    document.getElementById('root'));



