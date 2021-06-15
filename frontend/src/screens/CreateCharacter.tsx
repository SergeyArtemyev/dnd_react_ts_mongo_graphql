import { useEffect } from 'react';
import { useLoadData } from '../hooks/useLoadData';
import Race from '../components/layout/createCharacter/Race/Race';
import CharClass from '../components/layout/createCharacter/Class/Class';
import Abilities from '../components/layout/createCharacter/Abilities/Abilities';
import Description from '../components/layout/createCharacter/Description/Description';

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
                <h4 className='center-align create-header'>Welcome to the character creation page</h4>
                <div className='main-window'>
                    <form id='creation-form' onSubmit={onSubmit}>
                        <div className='row'>
                            <div className='col s12'>
                                <ul className='tabs'>
                                    <li className='tab col s2 offset-s1'>
                                        <a className='active' href='#race-tab'>
                                            Race
                                        </a>
                                    </li>
                                    <li className='tab col s2'>
                                        <a href='#class-tab'>Class</a>
                                    </li>
                                    <li className='tab col s2'>
                                        <a href='#ability-tab'>Ability</a>
                                    </li>
                                    <li className='tab col s2'>
                                        <a href='#description-tab'>Description</a>
                                    </li>
                                    <li className='tab col s2'>
                                        <a href='#test5'>Equipment</a>
                                    </li>
                                </ul>
                            </div>
                            <div id='race-tab' className='col s12'>
                                <Race />
                            </div>
                            <div id='class-tab' className='col s12'>
                                <CharClass />
                            </div>
                            <div id='ability-tab' className='col s12'>
                                <Abilities />
                            </div>
                            <div id='description-tab' className='col s12'>
                                <Description />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateCharacter;
