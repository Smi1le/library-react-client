import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect} from "react-router-dom";
import '../App.css'

class TodoList extends Component {

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <Link to={`/dictionary`} from={`/`}>Dictionary</Link>
                </div>
            </div>
        );
    }
}

export default TodoList