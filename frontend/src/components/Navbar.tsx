import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='nav-wraper container'>
                <span className='brand-logo'>
                    <Link to='/'>JKSS World</Link>
                </span>

                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/create'>Chreacte Character</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
