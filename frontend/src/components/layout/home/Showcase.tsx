import { Link } from 'react-router-dom';
import logo from '../../../img/dnd-logo1.png';

const Showcase = () => {
    return (
        <header>
            <div className='showcase container'>
                <div className='row'>
                    <div className='col m6 s12'>
                        <div className='valign-wrapper center-align'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={logo} alt={logo} />
                                    <span className='card-title'>Jkss World</span>
                                </div>
                                <div className='card-content'>
                                    <p>the world where there are no boundaries for a fantasy</p>
                                </div>
                                <div className='card-action'>
                                    <Link to='/create' className='waves-effect waves-light red lighten-1 btn'>
                                        <i className='material-icons right'>build</i>Create Character
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Showcase;
