const MainContent = () => {
    return (
        <section id='main-content'>
            <div className='container'>
                <div className='center-align'>
                    <h2 style={{ fontSize: '3rem' }} className='main-color'>
                        More Information
                    </h2>
                    <p className='flow-text'>
                        This is an interface for a Game Master. Game Master is the God here.
                    </p>
                </div>
                <br />
                <br />
                <br />
                <div className='row center-align'>
                    <div className='col l6 m12 offset-l6'>
                        <h3 className='main-color'>Write your own story</h3>
                        <p className='flow-text'>
                            Use your imagination and create your own story, your rules, your laws.
                            What will be waiting for your players there? They only can guess...
                        </p>
                    </div>
                </div>
                <div className='row center-align'>
                    <div className='col l6 m12 offset-l3'>
                        <h3 className='main-color'>Invite your friends</h3>
                        <p className='flow-text'>
                            Take your friends into an amazing journey. Sinse it is a Game Master
                            interface they will follow your lead and will be able to see the result
                            of their actions via screen share technology.
                        </p>
                    </div>
                </div>
                <div className='row center-align'>
                    <div className='col l6 m12'>
                        <h3 className='main-color'>Create characters</h3>
                        <p className='flow-text'>
                            As a Game Master you can create NPCs and Bosses. The players can create
                            their own characters or use our patterns.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainContent;
