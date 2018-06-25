import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
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
            </Menu>
        );
    }

}

export default Nav;