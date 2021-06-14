import { FC } from 'react';
import SelectFactory from '../../../selects/SelectFactory';

interface FighterDescriptionProps {
    className: string;
    fightingStyle: string;
    secondWind: string;
    changeArrow: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const FighterDescription: FC<FighterDescriptionProps> = ({
    className,
    fightingStyle,
    secondWind,
    changeArrow,
}) => {
    return (
        <>
            <li className='desc-li'>
                <div className='collapsible-header' onClick={changeArrow}>
                    <span>Fighting Style</span>
                    <span className='new badge' data-badge-caption='choose options'></span>
                    <i className='material-icons icon-arrow'>arrow_downward</i>
                </div>
                <div className='collapsible-body'>
                    <p>{fightingStyle}</p>
                    <SelectFactory
                        dataName={className}
                        selectName='fightingStyle'
                        label='Fighting Style'
                    />
                </div>
            </li>
            <li className='desc-li'>
                <div className='collapsible-header' onClick={changeArrow}>
                    <span>Second Wind</span>
                    <i className='material-icons icon-arrow'>arrow_downward</i>
                </div>
                <div className='collapsible-body'>
                    <p>{secondWind}</p>
                </div>
            </li>
        </>
    );
};

export default FighterDescription;
