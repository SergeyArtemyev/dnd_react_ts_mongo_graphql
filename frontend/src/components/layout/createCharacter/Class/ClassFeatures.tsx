import { FC } from 'react';
import { useClassFeatures } from '../../../../hooks/useClassFeatures';

interface ClasFeaturesProps {
    className: string;
}

const ClassFeatures: FC<ClasFeaturesProps> = ({ className }) => {
    const { hitDie, primAbil, saves } = useClassFeatures(className);
    return (
        <div>
            <ul className='collection'>
                <li className='collection-item'>
                    <span className='main-color underline'>Hit Die:</span> {hitDie}
                </li>
                <li className='collection-item'>
                    <span className='main-color underline'>Primary Ability:</span> {primAbil}
                </li>
                <li className='collection-item'>
                    <span className='main-color underline'>Saves:</span> {saves}
                </li>
            </ul>
        </div>
    );
};

export default ClassFeatures;
