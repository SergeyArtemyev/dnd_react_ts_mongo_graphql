import { FC } from 'react';
import { useHistory } from 'react-router';
import { Player } from '../../../store/reducers/playerReducer';
import { PlayerChildrenProps } from '../../../screens/Player';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { deletePlayer } from '../../../gql/mutations';
import { deletePlayer as delPlayer } from '../../../actions/player';

const Heading: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    const [runDeletePlayer] = useMutation(deletePlayer);
    const { _id, race, playerClass, background, charName, alignment, avatar } = playerData;
    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = () => {
        runDeletePlayer({ variables: { id: _id } });
        dispatch(delPlayer());
        history.push('/');
    };

    return (
        <div className='row heading'>
            <div className='avatar col s4'>
                <img className='char-avatar' src={avatar} alt='' />
                <span className='name'>{charName}</span>
            </div>
            <div className='col s6 row'>
                <table>
                    <tbody>
                        <tr>
                            <th className='main-color underline'>Class</th>
                            <th className='main-color underline'>background</th>
                            <th className='main-color underline'>player name</th>
                        </tr>
                        <tr>
                            <td>{playerClass}</td>
                            <td>{background}</td>
                            <td>{charName}</td>
                        </tr>
                        <tr>
                            <th className='main-color underline'>race</th>
                            <th className='main-color underline'>alignment</th>
                            <th className='main-color underline'>level</th>
                        </tr>
                        <tr>
                            <td>{race}</td>
                            <td>{alignment}</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='col s2'>
                <button id='delete-btn' onClick={onClick}>
                    Delete Character
                </button>
            </div>
        </div>
    );
};

export default Heading;
