import { FC } from 'react';
import { useTraits } from '../../../../hooks/useTraits';
import SelectFactory from '../../../selects/SelectFactory';

interface RaceTraitsProps {
    raceName: string;
}

const RaceTraits: FC<RaceTraitsProps> = ({ raceName }) => {
    const { abscore, skills } = useTraits(raceName);

    return (
        <div>
            <label>Abscore</label>
            <ul className='collection'>
                <li className='collection-item'>{abscore}</li>
            </ul>
            {skills !== undefined && skills.length > 0 ? (
                <>
                    <label>Skills</label>
                    <ul className='collection'>
                        {skills.map((skill, index) => (
                            <li key={index} className='collection-item'>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </>
            ) : null}
            <SelectFactory raceName={raceName} />
        </div>
    );
};

export default RaceTraits;
