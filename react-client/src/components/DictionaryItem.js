import React, {Component} from 'react';

class DictionaryItem extends Component {

    constructor(props) {
        super(props);
        this.items = {
            1 : {
                id: 1,
                word: 'Ключ',
                translate: 'Металлический стержень особой формы для отпирания и запирания замка.'
            },
            2: {
                id: 2,
                word: 'Пробел',
                translate: 'Незаполненное место в тексте, промежуток (между буквами, словами, строками)'
            },
            3: {
                id: 3,
                word: 'Процессор',
                translate: 'Центральная часть компьютера, выполняющая заданные программой преобразования ' +
                    'информации и осуществляющая управление всем вычислительным процессом.'
            }
        };
        let varId = parseInt(props.match.params.wordId);
        this.state = {
            word: this.items[varId].word,
            translate: this.items[varId].translate
        };
    }

    render() {
        console.log(this.state);
        return <div>
            <div>{this.state.word}</div>
            <div>
                <div>{this.state.translate}</div>
            </div>
        </div>;
    }
}

export default DictionaryItem;