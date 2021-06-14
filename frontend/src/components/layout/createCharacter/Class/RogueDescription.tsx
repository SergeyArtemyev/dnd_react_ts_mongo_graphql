import { FC } from 'react';
import SelectFactory from '../../../selects/SelectFactory';

interface RogueDescriptionProps {
    className: string;
    expertise: string;
    sneakAttack: string;
    thiefCant: string;
    changeArrow: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const RogueDescription: FC<RogueDescriptionProps> = ({
    className,
    expertise,
    sneakAttack,
    thiefCant,
    changeArrow,
}) => {
    return (
        <>
            <li className='desc-li'>
                <div className='collapsible-header' onClick={changeArrow}>
                    <span>Expertise</span>
                    <span className='new badge' data-badge-caption='choose options'></span>
                    <i className='material-icons icon-arrow'>arrow_downward</i>
                </div>
                <div className='collapsible-body'>
                    <p>{expertise}</p>
                    <SelectFactory dataName={className} selectName='expertise1' label='Expertise' />
                    <SelectFactory dataName={className} selectName='expertise2' label='Expertise' />
                </div>
            </li>
            <li className='desc-li'>
                <div className='collapsible-header' onClick={changeArrow}>
                    <span>Sneak Attack</span>
                    <i className='material-icons icon-arrow'>arrow_downward</i>
                </div>
                <div className='collapsible-body'>
                    <p>{sneakAttack}</p>
                </div>
            </li>
            <li className='desc-li'>
                <div className='collapsible-header' onClick={changeArrow}>
                    <span>Thieves' Cant</span>
                    <i className='material-icons icon-arrow'>arrow_downward</i>
                </div>
                <div className='collapsible-body'>
                    <p>{thiefCant}</p>
                </div>
            </li>
        </>
    );
};

export default RogueDescription;
