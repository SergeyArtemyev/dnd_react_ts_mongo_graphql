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
            {raceName === 'Human' && <SelectFactory dataName={raceName} selectName='extraLanguage' label='Extra Language' />}
            {raceName === 'Elf' && (
                <>
                    <SelectFactory dataName={raceName} selectName='cantrip' label='Cantrips' />
                    <SelectFactory dataName={raceName} selectName='extraLanguage' label='Extra Language' />
                </>
            )}
            {raceName === 'Dwarf' && <SelectFactory dataName={raceName} selectName='toolProff' label='Tool Proficiency' />}
        </div>
    );
};

export default RaceTraits;
