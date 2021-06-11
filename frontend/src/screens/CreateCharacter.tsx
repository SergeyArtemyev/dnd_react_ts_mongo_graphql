import { useEffect } from 'react';
import { useLoadData } from '../hooks/useLoadData';
import Race from '../components/layout/createCharacter/Race/Race';
import CharClass from '../components/layout/createCharacter/Class/Class';
//@ts-ignore
import M from 'materialize-css/dist/js/materialize.js';

const CreateCharacter = () => {
    useLoadData();

    useEffect(() => {
        M.AutoInit();
    }, []);

    const onSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <section id='char-create'>
            <div className='container'>
                <h4 className='center-align create-header'>
                    Welcome to the character creation page
                </h4>
                <div className='main-window'>
                    <form id='creation-form' onSubmit={onSubmit}>
                        <div className='row'>
                            <div className='col s12'>
                                <ul className='tabs'>
                                    <li className='tab col s2 offset-s1'>
                                        <a className='active' href='#race'>
                                            Race
                                        </a>
                                    </li>
                                    <li className='tab col s2'>
                                        <a href='#class'>Class</a>
                                    </li>
                                    <li className='tab col s2'>
                                        <a href='#test3'>Ability</a>
                                    </li>
                                    <li className='tab col s2'>
                                        <a href='#test4'>Description</a>
                                    </li>
                                    <li className='tab col s2'>
                                        <a href='#test5'>Equipment</a>
                                    </li>
                                </ul>
                            </div>
                            <div id='race' className='col s12'>
                                <Race />
                            </div>
                            <div id='class' className='col s12'>
                                <CharClass />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateCharacter;
