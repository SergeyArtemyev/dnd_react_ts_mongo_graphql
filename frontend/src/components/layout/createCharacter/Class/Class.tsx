import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAvatar } from '../../../../hooks/useAvatar';
import fighter from '../../../../img/form_img/fighter.jpeg';
import ranger from '../../../../img/form_img/ranger.jpeg';
import rogue from '../../../../img/form_img/rogue.jpeg';
import sorcerer from '../../../../img/form_img/sorcerer.jpeg';
import { getPlayerClass } from '../../../../actions/classes';
import ClassFeatures from './ClassFeatures';
// import ClassDescription from "./ClassDescription";

const Class = React.memo(() => {
    const { avatar: classAvatar, name: className, onChangeAvatar } = useAvatar();
    const dispatch = useDispatch();

    useEffect(() => {
        className && dispatch(getPlayerClass(className));
    }, [dispatch, className]);

    return (
        <div className='class'>
            <h4 className='center-align'>Choose your Class</h4>
            <div className='row'>
                <div className='col s12 m12 l6'>
                    <div className='row'>
                        <div className='col m6 s6'>
                            <div className='input-field col s12 m12'>
                                <select
                                    className='icons'
                                    name='playerClass'
                                    onChange={onChangeAvatar}
                                >
                                    <option value='' defaultValue='true'>
                                        Choose Class
                                    </option>
                                    <option data-icon={fighter} value='Fighter'>
                                        Fighter
                                    </option>
                                    <option data-icon={ranger} value='Ranger'>
                                        Ranger
                                    </option>
                                    <option data-icon={rogue} value='Rogue'>
                                        Rogue
                                    </option>
                                    <option data-icon={sorcerer} value='Sorcerer'>
                                        Sorcerer
                                    </option>
                                </select>
                            </div>
                            <div className='img-wraper'>
                                <img src={classAvatar} alt={classAvatar} />
                            </div>
                        </div>
                        <div className='col m6 s6'>
                            <h6>Class Features</h6>
                            {classAvatar !== '' ? <ClassFeatures className={className} /> : null}
                        </div>
                    </div>
                </div>
                {/* <div className="col s12 m12 l6">{classPicture !== "" ? <ClassDescription /> : null}</div> */}
            </div>
        </div>
    );
});

export default Class;
