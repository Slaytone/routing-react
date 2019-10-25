import React from 'react';
import './news.css';

class News extends React.Component{
    render() {
        return (
            <div>
            <h1>  Site News   </h1>
            <img src={require('../imgs/sense.jpg')} />
        </div>
    )
    }
}

export default News;