import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from './App';
import { Page1, Page2 } from './components';

export const Router =() => {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact children={<App/>}/>
            <Route path="/page1" exact children={<Page1/>}/>
            <Route path="/page2" exact children={<Page2/>}/>
            </Switch>
        </BrowserRouter>
    )
}