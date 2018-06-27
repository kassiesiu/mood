import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'semantic-ui-react';


class Nav extends Component {

    constructor() {
        super();

        this.state = {
            items: []
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        axios.get('/api/links').then(res => {
            this.setState({ items: res.data });
        })
    }

    handleSearch(e, { value }) {
        var updatedList = this.state.items.filter((item) => {
            var searchValue = item.desc;
            return searchValue.indexOf(item) !== -1;
        });
        
        console.log(updatedList)
    }

    
    
    render() {

        return (
            <Input icon='search' placeholder='Search...' onChange = {this.handleSearch}/>
        );
    }

}

export default Nav;