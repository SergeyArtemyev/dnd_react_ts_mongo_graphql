const Footer = () => {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col s6 l4 developer'>
                        <p>Developer: Jkss</p>
                        <p>
                            Project: Jkss World <span>&copy;</span>
                        </p>
                    </div>
                    <div className='col s6 l4 offset-l4 right-align'>
                        <div className='input-field inline'>
                            <input id='email_inline' type='email' className='validate' />
                            <label htmlFor='email_inline'>Enter your email</label>
                            <span className='helper-text'>
                                <button className='btn waves-effect waves-light red lighten-1' name='action'>
                                    Subscribe
                                    <i className='material-icons right'>send</i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
