import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import initAvatars from '../../../../utils/initAvatars';
import { getAvatar } from '../../../../actions/player';
import ImageRow from './ImageRow';

const DescAvatars = () => {
    const [mainAvatar, setMainAvatar] = useState(require('../../../../img/avatars/avatar.png').default);
    const dispatch = useDispatch();

    useEffect(() => {
        initAvatars();
        dispatch(getAvatar(mainAvatar));
    }, [mainAvatar, dispatch]);

    const onClick = () => {
        let avatar = (document.querySelector('.main-avatar') as HTMLImageElement).src;
        setMainAvatar(avatar);
    };

    return (
        <div className='row'>
            <div className='col m6 offset-m3 s10 offset-s2 '>
                <div className='row'>
                    {/* Modal Trigger */}
                    <a className='modal-trigger avatar col l2 m3 s3' href='#modal1'>
                        <img className='main-avatar' src={mainAvatar} alt='avatar' />
                        <i className='material-icons img-icon'>add</i>
                        <input name='avatar' type='text' value={mainAvatar} style={{ visibility: 'hidden' }} readOnly></input>
                    </a>
                    <div className='input-field col l9 m9 s8'>
                        <input id='char_name' name='charName' type='text' className='validate' />
                        <label htmlFor='char_name'>Character Name</label>
                    </div>
                </div>
            </div>

            {/* Modal Structure */}
            <div id='modal1' className='modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4 className='center-align'>Choose Your Avatar</h4>
                    </div>
                    <div className='modal-body'>
                        <ImageRow raceName='human' onClick={onClick} />
                        <ImageRow raceName='elf' onClick={onClick} />
                        <ImageRow raceName='halfling' onClick={onClick} />
                        <ImageRow raceName='dwarf' onClick={onClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescAvatars;
