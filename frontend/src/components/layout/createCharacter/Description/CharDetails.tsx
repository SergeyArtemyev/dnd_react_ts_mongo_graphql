import SelectFactory from '../../../selects/SelectFactory';

const CharDetails = () => {
    return (
        <>
            <div className='row'>
                <div className='col l4 m6 s12'>
                    <SelectFactory dataName='alignment' selectName='alignment' label='Alignment' />
                    <br />
                    <div className='input-field'>
                        <input id='faith' type='text' name='faith' className='validate' />
                        <label htmlFor='faith'>Faith</label>
                    </div>
                    <br />
                    <SelectFactory dataName='lifestyle' selectName='lifestyle' label='Lifestyle' />
                </div>
            </div>
        </>
    );
};

export default CharDetails;
