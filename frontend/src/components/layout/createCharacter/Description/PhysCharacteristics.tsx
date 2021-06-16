import PhysCharInput from './PhysCharInput';

const PhysCharacteristics = () => {
    return (
        <>
            <div className='row'>
                <div className='col l4 m6 s12'>
                    <PhysCharInput inputName='hair' />
                    <PhysCharInput inputName='skin' />
                    <PhysCharInput inputName='eyes' />
                    <PhysCharInput inputName='height' />
                    <PhysCharInput inputName='weight' />
                    <PhysCharInput inputName='age' />
                    <PhysCharInput inputName='gender' />
                </div>
            </div>
        </>
    );
};

export default PhysCharacteristics;
