import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRaces } from '../actions/races';
import { AppState } from '../store/store';
import { useQuery } from '@apollo/client';
import { getRaces } from '../gql/queries';

const CreateCharacter = () => {
    const { data: racesData } = useQuery(getRaces);
    const dispatch = useDispatch();
    const races = useSelector((state: AppState) => state.races);

    useEffect(() => {
        racesData && dispatch(loadRaces(racesData.getRaces.races));
    }, [dispatch, racesData]);

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
                                        <a className='active' href='#test1'>
                                            Race
                                        </a>
                                    </li>
                                    <li className='tab col s2'>
                                        <a href='#test2'>Class</a>
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
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateCharacter;
