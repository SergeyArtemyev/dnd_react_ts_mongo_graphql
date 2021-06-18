import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBackground } from '../../../../actions/player';
import BackOptions from './BackOptions';
import SelectFactory from '../../../selects/SelectFactory';

//@ts-ignore
import M from 'materialize-css/dist/js/materialize.min.js';
import { useBackground } from '../../../../hooks/useBackground';

const Background = () => {
    const [backgroundName, setBackgroundName] = useState('');
    const { info, skillProff, backFeature, featureInfo, toolProff, vehicleProff } = useBackground(backgroundName);

    const dispatch = useDispatch();

    useEffect(() => {
        M.AutoInit();
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBackgroundName(e.target.value);
        dispatch(getBackground(e.target.value));
    };

    return (
        <>
            <div className='row'>
                <div className='col l4 s8'>
                    <SelectFactory dataName='background' selectName='background' label='Background' onChange={onChange} />
                </div>
            </div>
            {backgroundName === '' ? null : (
                <>
                    <hr />
                    <p>{info}</p>
                    <div>
                        <span className='main-color underline'>Skill Proficiencies:</span>{' '}
                        <ul className='browser-default'>
                            {skillProff !== undefined
                                ? skillProff.map((skill, index) => (
                                      <li key={index}>
                                          {' '}
                                          {skill}
                                          <input type='text' className='hidden-input invis-input' name={`extraSkill${index + 1}`} value={skill} readOnly />
                                      </li>
                                  ))
                                : null}
                        </ul>
                        {backgroundName === 'Haunted One' ? (
                            <>
                                <div className='row'>
                                    <div className='col l4 m6 s12'>
                                        <br />
                                        <SelectFactory dataName={backgroundName} selectName='extraSkill1' label='Extra Skill' />
                                        <br />
                                        <SelectFactory dataName={backgroundName} selectName='extraSkill2' label='Extra Skill' />
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                    {toolProff !== null ? (
                        <>
                            <span className='main-color underline'>Tool Proficiencies:</span>
                            <ul className='browser-default'>
                                <li>{toolProff}</li>
                            </ul>
                        </>
                    ) : null}
                    {vehicleProff !== null ? (
                        <>
                            <span className='main-color underline'>Vehicle Proficiencies:</span>
                            <ul className='browser-default'>
                                <li>{vehicleProff}</li>
                            </ul>
                        </>
                    ) : null}
                    <div className='row'>
                        <div className='col l4 m6 s12'>
                            <BackOptions background={backgroundName} />
                        </div>
                    </div>
                    <ul className='collapsible'>
                        <li>
                            <div className='collapsible-header'>{backFeature}</div>
                            <div className='collapsible-body'>
                                <span>{featureInfo}</span>
                            </div>
                        </li>
                    </ul>
                </>
            )}
        </>
    );
};

export default Background;
