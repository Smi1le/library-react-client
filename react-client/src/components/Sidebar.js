import React, {Component} from 'react'
import SidebarItem from './SidebarItem'

class Sidebar extends Component {

    render() {
        return <div>
                <SidebarItem
                    className='dictionary-list-page-link'
                    pageRef='/dictionary'
                    name='Список слов'
                />
                <SidebarItem
                    className='dictionary-add-page-link'
                    pageRef='/add'
                    name='Добавить слово'
                />
            </div>
    }
}

export default Sidebar;