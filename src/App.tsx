import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListContainer from './users/list-container';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/users" component={ListContainer} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
