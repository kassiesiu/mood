import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Nav extends Component {
    
    render() {

        return (
            <Menu secondary>
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