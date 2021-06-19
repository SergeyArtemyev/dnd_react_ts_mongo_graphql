import { FC } from 'react';
import { useDescription } from '../../../hooks/useDescription';
import { useProfSkills } from '../../../hooks/useProfSkills';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';
import SkillProff from './SkillProff';
import ClassDesc from './ClassDesc';

const ClassFeature: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    const classDescription = useDescription('class', playerData.playerClass!);
    const proffSkills = useProfSkills(playerData);

    return (
        <>
            <h4>Class Features</h4>
            <p>
                <span className='main-color underline'>Hit Points at 1st Level:</span> {classDescription.hitAtFirstLvl}
            </p>
            <SkillProff skills={proffSkills} />
            <ClassDesc playerData={playerData} description={classDescription} />
        </>
    );
};

export default ClassFeature;
