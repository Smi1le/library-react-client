import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Topic from './Topic';
// import Topic from 'Topic'
// import App from "../App";

class Home extends Component {

    constructor(props) {
        super(props);
        // this.setState({counter: 0}, this.callback);
        // this.handleClick = this.callback.bind(this);
        this.match = props;
    }

    render() {
        console.log(this.match);
        let match = this.match.match;
        return <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>

                <Route path={`${match.path}/:topicId`} component={Topic} />
                <Route
                    exact
                    path={match.path}
                    render={() => <h3>Please select a topic.</h3>}
                />
               </div>
    }
}

export default Home;