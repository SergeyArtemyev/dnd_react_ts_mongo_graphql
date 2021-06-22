import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import CreateCharacter from './screens/CreateCharacter';
import Player from './screens/Player';
import Navbar from './components/Navbar';

import 'materialize-css/dist/css/materialize.min.css';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/create' component={CreateCharacter} />
                <Route path='/player/:id' component={Player} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
