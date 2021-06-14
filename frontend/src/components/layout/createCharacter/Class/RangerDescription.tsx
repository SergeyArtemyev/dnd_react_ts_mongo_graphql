import { FC } from 'react';
import SelectFactory from '../../../selects/SelectFactory';

interface RangerDescriptionProps {
    className: string;
    favoredEnemy: string;
    naturalExplorer: string;
    changeArrow: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const RangerDescription: FC<RangerDescriptionProps> = ({
    className,
    favoredEnemy,
    naturalExplorer,
    changeArrow,
}) => {
    return (
        <>
            <li className='desc-li'>
                <div className='collapsible-header' onClick={changeArrow}>
                    <span>Favored Enemy</span>
                    <span className='new badge' data-badge-caption='choose options'></span>
                    <i className='material-icons icon-arrow'>arrow_downward</i>
                </div>
                <div className='collapsible-body'>
                    <p>{favoredEnemy}</p>
                    <SelectFactory
                        dataName={className}
                        selectName='favoredEnemy'
                        label='Favored Enemy'
                    />
                    <SelectFactory dataName={className} selectName='language' label='Language' />
                </div>
            </li>
            <li className='desc-li'>
                <div className='collapsible-header' onClick={changeArrow}>
                    <span>Natural Explorer</span>
                    <span className='new badge' data-badge-caption='choose options'></span>
                    <i className='material-icons icon-arrow'>arrow_downward</i>
                </div>
                <div className='collapsible-body'>
                    <p>{naturalExplorer}</p>
                    <SelectFactory
                        dataName={className}
                        selectName='naturalExplorer'
                        label='Natural Explorer'
                    />
                </div>
            </li>
        </>
    );
};

export default RangerDescription;
