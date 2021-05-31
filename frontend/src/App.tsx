import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import CreateCharacter from './screens/CreateCharacter';
import Navbar from './components/Navbar';

import 'materialize-css/dist/css/materialize.min.css';
// @ts-ignore
import M from 'materialize-css/dist/js/materialize.js';
import Footer from './components/Footer';

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
                <Route path='/create' component={CreateCharacter} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
