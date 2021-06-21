import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { useLoadData } from '../hooks/useLoadData';
import Race from '../components/layout/createCharacter/Race/Race';
import CharClass from '../components/layout/createCharacter/Class/Class';
import Abilities from '../components/layout/createCharacter/Abilities/Abilities';
import Description from '../components/layout/createCharacter/Description/Description';
import Equipment from '../components/layout/createCharacter/Equipment/Equipment';
import { addPlayer } from '../gql/mutations';

//@ts-ignore
import M from 'materialize-css/dist/js/materialize.js';
import { CLEAR_PLAYER_STATE } from '../store/types/player';
import { useControls } from '../hooks/useControls';
import { validation } from '../utils/validation';
import Alert from '../components/Alert';

const CreateCharacter = () => {
    const [alertData, setAlertData] = useState<string[]>([]);
    const [runAddPlayer, { data: newPlayer }] = useMutation(addPlayer);
    const dispatch = useDispatch();
    const history = useHistory();
    const [nextButton, prevButton] = useControls();

    useLoadData();

    useEffect(() => {
        dispatch({ type: CLEAR_PLAYER_STATE });
    }, [dispatch]);

    useEffect(() => {
        if (newPlayer) {
            history.push(`/player/${newPlayer.createCharacter._id}`);
        }
    }, [history, newPlayer]);

    useEffect(() => {
        M.AutoInit();
    }, []);

    const onSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();
        let formElem = document.querySelector('form');
        formElem!.addEventListener('formdata', (e: any) => {
            let words: string[] = [];
            let data = e.formData;
            for (let pair of data.entries()) {
                //@ts-ignore
                words.push([pair[0], pair[1]]);
            }
            //@ts-ignore
            data = Object.fromEntries(words);
            const missedFields = validation(data);
            if (missedFields.length > 0) {
                setAlertData(missedFields);
            } else {
                runAddPlayer({ variables: { input: data } });
            }
        });
        new FormData(formElem!);
    };

    return (
        <section id='char-create'>
            <div className='container'>
                <h4 className='center-align create-header'>Welcome to the character creation page</h4>

                <div className='main-window'>
                    {alertData.length > 0 ? <Alert alertData={alertData} setAlertData={setAlertData} /> : null}
                    <form id='creation-form' onSubmit={onSubmit}>
                        <div className='row'>
                            <div className='col s12'>
                                <ul className='tabs'>
                                    <li className='tab col s2 offset-s1'>
                                        <a className='active' href='#race-tab'>
                                            Race
                                        </a>
                                    </li>
                                    <li className='tab col s2 disabled'>
                                        <a href='#class-tab'>Class</a>
                                    </li>
                                    <li className='tab col s2 disabled'>
                                        <a href='#ability-tab'>Ability</a>
                                    </li>
                                    <li className='tab col s2 disabled'>
                                        <a href='#description-tab'>Description</a>
                                    </li>
                                    <li className='tab col s2 disabled'>
                                        <a href='#equipment-tab'>Equipment</a>
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
                            <div id='equipment-tab' className='col s12'>
                                <Equipment />
                            </div>
                        </div>
                        {/* hidden submit */}
                        <button type='submit'>submit</button>
                    </form>
                    <div className='form-btns'>
                        <button className='prev' onClick={prevButton}>
                            <i className='material-icons'>arrow_back</i> <span>Prev</span>
                        </button>
                        <button className='next' onClick={nextButton}>
                            <span>Next</span> <i className='material-icons'>arrow_forward</i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateCharacter;
