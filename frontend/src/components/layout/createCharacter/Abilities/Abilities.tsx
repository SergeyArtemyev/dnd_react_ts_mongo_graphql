import AbilityScore from './AbilityScore';
import AbPoints from './AbPoints';

const Abilities = () => {
    return (
        <div>
            <h4 className='center-align'>Ability Score</h4>
            <div className='row'>
                <AbilityScore />
                <AbPoints />
            </div>
        </div>
    );
};

export default Abilities;
