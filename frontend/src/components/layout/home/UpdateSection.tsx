import updImg from '../../../img/update-img.jpg';

const UpdateSection = () => {
    return (
        <section id='update-section'>
            <div className='container'>
                <div className='center-align'>
                    <h2 style={{ fontSize: '3rem' }} className='main-color'>
                        Latest Updates
                    </h2>
                    <p className='flow-text'>Here we will post latest news about our project</p>
                </div>
                <div className='row'>
                    <div className='col s12 m4'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src={updImg} alt='img' />
                            </div>
                            <div className='card-content'>
                                <span className='card-title red-text lighten-1'>Some Header</span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                    minus.
                                </p>
                            </div>
                            <div className='card-action'>
                                <a href='#!' className='waves-effect waves-light red lighten-1 btn'>
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col s12 m4'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src={updImg} alt='img' />
                            </div>
                            <div className='card-content'>
                                <span className='card-title red-text lighten-1'>Some Header</span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                    minus.
                                </p>
                            </div>
                            <div className='card-action'>
                                <a href='#!' className='waves-effect waves-light red lighten-1 btn'>
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col s12 m4'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src={updImg} alt='img' />
                            </div>
                            <div className='card-content'>
                                <span className='card-title red-text lighten-1'>Some Header</span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                    minus.
                                </p>
                            </div>
                            <div className='card-action'>
                                <a href='#!' className='waves-effect waves-light red lighten-1 btn'>
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateSection;
