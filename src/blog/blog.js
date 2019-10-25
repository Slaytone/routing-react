import React from 'react';
import './blog.css';

class Blog extends React.Component{
    render() {
        return (
            <div>
                <h1>  Site BLOG   </h1>
                <img src={require('../imgs/mine.jpg')} />
            </div>
        )
    }
}

export default Blog;
