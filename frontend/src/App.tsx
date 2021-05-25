import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './components/Navbar';

import 'materialize-css/dist/css/materialize.min.css';
// @ts-ignore
import M from 'materialize-css/dist/js/materialize.js';

const App = () => {
    useEffect(() => {
        M.AutoInit();
    });

    return (
        <Router>
            <Navbar />
            {/* header */}
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    );
};

export default App;
