import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';

class Menu extends React.Component{
    render() {
        return (
            <ul className='menu-main'>
                <li>  <Link to="/">Main Page</Link> </li>
                <li>  <Link to="/news">News </Link> </li>
                <li>  <Link to="/blog">Blog </Link> </li>
                <li>   Contacts </li>
            </ul>
        )

    }
}

export default Menu;
