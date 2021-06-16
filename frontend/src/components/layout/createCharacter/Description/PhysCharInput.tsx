import { FC } from 'react';

interface PhysCharInputProps {
    inputName: string;
}

const PhysCharInput: FC<PhysCharInputProps> = ({ inputName }) => {
    return (
        <div className='input-field'>
            <input id={inputName} type='text' name={inputName} className='validate' />
            <label htmlFor={inputName}>{inputName.toUpperCase()}</label>
        </div>
    );
};

export default PhysCharInput;
