import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

class SidebarItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className={this.props.className} >
            <Link to={`${this.props.pageRef}`}>{this.props.name}</Link>
        </div>
    }
}

export default SidebarItem;