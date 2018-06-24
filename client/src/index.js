import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import Nav from './components/Nav/Nav';
import '../node_modules/semantic-ui-css/semantic.css';

ReactDOM.render(
    <BrowserRouter>

        <Switch>
            <Route path = '/' exact component = { App } />
            <Route path = '/new' exact component = { Nav } />
        </Switch>
    
    </BrowserRouter>, 
    
    document.getElementById('root')
);