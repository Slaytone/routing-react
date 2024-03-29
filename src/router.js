import React from 'react';

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hash: window.location.hash}
        this.updateHash = this.updateHash.bind(this);
    }

    updateHash(e){
        this.setState({hash: window.location.hash})
    }

    componentDidMount() {
        addEventListener("hashchange", this.updateHash, false)
    }

    componentWillUnmount() {
        removeEventListener("hashchange", this.updateHash, false)
    }

    render() {
        if (this.props.mapping[this.state.hash]) {
            return (
                this.props.mapping[this.state.hash]
            )
        }   else {
            return this.props.mapping['*'];
        }
    }
}

export default Router;