import React from 'react';
import AbilityScore from './AbilityScore';
import AbPoints from './AbPoints';

const Abilities = React.memo(() => {
    return (
        <div>
            <h4 className='center-align'>Ability Score</h4>
            <div className='row'>
                <AbilityScore />
                <AbPoints />
            </div>
        </div>
    );
});

export default Abilities;
