import { FC, useEffect } from 'react';
import { useDescription } from '../../../../hooks/useDescription';
//@ts-ignore
import M from 'materialize-css/dist/js/materialize.min.js';
import { useChangeArrow } from '../../../../hooks/useChangeArrow';

interface RaceDescriptionProps {
    raceName: string;
}

const RaceDescription: FC<RaceDescriptionProps> = ({ raceName }) => {
    const { info, abScInc, age, alignment, size, speed, languages } = useDescription(
        'race',
        raceName
    );

    useEffect(() => {
        // Initialize Material JS
        M.AutoInit();
    });

    const changeArrow = useChangeArrow();

    return (
        <div className='description'>
            <h3>Description</h3>
            <p>{info}</p>
            <ul className='collapsible expandable'>
                <li className='desc-li'>
                    <div className='collapsible-header' onClick={changeArrow}>
                        <span>Ability Score Increase</span>
                        <i className='material-icons icon-arrow'>arrow_downward</i>
                    </div>
                    <div className='collapsible-body'>
                        <span>{abScInc}</span>
                    </div>
                </li>
                <li className='desc-li'>
                    <div className='collapsible-header' onClick={changeArrow}>
                        <span>Age</span>
                        <i className='material-icons icon-arrow'>arrow_downward</i>
                    </div>
                    <div className='collapsible-body'>
                        <span>{age}</span>
                    </div>
                </li>
                <li className='desc-li'>
                    <div className='collapsible-header' onClick={changeArrow}>
                        <span>Alignment</span>
                        <i className='material-icons icon-arrow'>arrow_downward</i>
                    </div>
                    <div className='collapsible-body'>
                        <span>{alignment}</span>
                    </div>
                </li>
                <li className='desc-li'>
                    <div className='collapsible-header' onClick={changeArrow}>
                        <span>Size</span>
                        <i className='material-icons icon-arrow'>arrow_downward</i>
                    </div>
                    <div className='collapsible-body'>
                        <span>{size}</span>
                    </div>
                </li>
                <li className='desc-li'>
                    <div className='collapsible-header' onClick={changeArrow}>
                        <span>Speed</span>
                        <i className='material-icons icon-arrow'>arrow_downward</i>
                    </div>
                    <div className='collapsible-body'>
                        <span>{speed}</span>
                    </div>
                </li>
                <li className='desc-li'>
                    <div className='collapsible-header' onClick={changeArrow}>
                        <span>Languages</span>
                        <i className='material-icons icon-arrow'>arrow_downward</i>
                    </div>
                    <div className='collapsible-body'>
                        <span>{languages}</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default RaceDescription;
