import React, { Component } from 'react';
import TodoList from './components/TodoItem';
import Dictionary from './components/Dictionary'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DictionaryItem from "./components/DictionaryItem";
import Sidebar from "./components/Sidebar";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Sidebar/>
                    <TodoList/>
                    {/*<Dictionary/>*/}
                    <Switch>
                        <Route path={`/dictionary/:wordId`} component={DictionaryItem} />
                        <Route path={`/dictionary`} component={Dictionary} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
