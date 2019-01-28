import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import DictionaryItem from './DictionaryItem';

class Dictionary extends Component {

    constructor(props) {
        super(props);
        this.match = props;
        this.state = {
            items: [{
                id: 1,
                word: 'Ключ',
                translate: 'Металлический стержень особой формы для отпирания и запирания замка.'
            }, {
                id: 2,
                word: 'Пробел',
                translate: 'Незаполненное место в тексте, промежуток (между буквами, словами, строками)'
            },{
                id: 3,
                word: 'Процессор',
                translate: 'Центральная часть компьютера, выполняющая заданные программой преобразования ' +
                    'информации и осуществляющая управление всем вычислительным процессом.'
            }]
        };
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        let mountNode = React.findDOMNode(this.refs.wassup);
        let unmount = React.unmountComponentAtNode(mountNode);
        console.log(unmount); // false
    }

    render() {
        console.log(this.match);
        let match = this.match.match;
        console.log(this.state);
        let listItems = this.state.items;
        return (<Switch>
                    <div>
                    {listItems.map(item => {
                        return <div>
                            <div>
                                <Link to={`/dictionary/${item.id}`} onClick={this._handleClick}>{item.word}</Link>
                            </div>
                        </div>
                    })}
                    </div>
                </Switch>)
    }
}

export default Dictionary;