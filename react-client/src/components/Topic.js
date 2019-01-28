import React, {Component} from 'react'

class Topic extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.match = props.match;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.match = nextProps.match;
    }

    render() {
        console.log(this.match);
        return <div>
            <h3>{this.match.params.topicId}</h3>
        </div>
    }
}

export default Topic;