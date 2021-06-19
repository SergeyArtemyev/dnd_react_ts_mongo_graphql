import { FC } from 'react';
import { useBackground } from '../../../hooks/useBackground';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';

const CharDescription: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    const { background, extraSkill1, extraSkill2, alignment, gender, eyes, height, weight, lifestyle, faith, hair, skin, age } = playerData;
    const { info } = useBackground(background!);

    return (
        <div>
            <h4>Background</h4>
            <p className='main-color underline'>{background}</p>
            <p>{info}</p>
            <p className='main-color underline'>Proficiency</p>
            <ul className='browser-default'>
                <li>{extraSkill1}</li>
                <li>{extraSkill2}</li>
            </ul>
            <p className='main-color underline'>Characteristics</p>
            <table>
                <thead>
                    <tr>
                        <th className='main-color underline'>Alignment</th>
                        <th className='main-color underline'>Gender</th>
                        <th className='main-color underline'>Eyes</th>
                        <th className='main-color underline'>Lifestyle</th>
                        <th className='main-color underline'>Height</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{alignment}</td>
                        <td>{gender}</td>
                        <td>{eyes}</td>
                        <td>{lifestyle}</td>
                        <td>{height}</td>
                    </tr>
                    <tr>
                        <td style={{ border: 'none' }}></td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th className='main-color underline'>Faith</th>
                        <th className='main-color underline'>Hair</th>
                        <th className='main-color underline'>Skin</th>
                        <th className='main-color underline'>Age</th>
                        <th className='main-color underline'>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{faith}</td>
                        <td>{hair}</td>
                        <td>{skin}</td>
                        <td>{age}</td>
                        <td>{weight}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CharDescription;
