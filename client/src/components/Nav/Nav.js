import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Search from '../Search/Search'
import './Nav.css'

class Nav extends Component {
    
    render() {

        return (
            <Menu secondary className = "nav">
                <Menu.Item
                    name = 'home'
                    as = { Link } to = '/'
                    />
                <Menu.Item
                    name = 'new'
                    as = { Link } to = '/new'
                    />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Search />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }

}

export default Nav;