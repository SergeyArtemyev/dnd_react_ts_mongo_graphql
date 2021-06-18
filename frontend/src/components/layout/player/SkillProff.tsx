import { FC } from 'react';

interface SkillProffProps {
    skills: string[];
}

const SkillProff: FC<SkillProffProps> = ({ skills }) => {
    return (
        <>
            <p className='main-color underline'>Proficiency</p>
            <ul className='browser-default'>
                {skills.map((skill, index) => (
                    <li key={index} className='profskills'>
                        {skill}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SkillProff;
