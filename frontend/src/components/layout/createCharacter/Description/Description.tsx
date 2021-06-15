import React from 'react';
import DescAvatars from './DescAvatars';
import Background from './Background';
// import CharDetails from "./CharDetails";
// import PhysCharacteristics from "./PhysCharacteristics";

const Description = () => {
    return (
        <div>
            <h4 className='center-align'>Character Description</h4>
            <DescAvatars />
            <h4 className='center-align'>Background</h4>
            <Background />
            <hr />
            <ul className='collapsible'>
                <li>
                    <div className='collapsible-header'>Character Details</div>
                    <div className='collapsible-body'>{/* <CharDetails /> */}</div>
                </li>
                <li>
                    <div className='collapsible-header'>Physical Characteristics</div>
                    <div className='collapsible-body'>{/* <PhysCharacteristics /> */}</div>
                </li>
            </ul>
            <br />
        </div>
    );
};

export default Description;
