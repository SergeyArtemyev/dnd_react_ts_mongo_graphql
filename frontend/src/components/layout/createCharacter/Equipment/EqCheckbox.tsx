import { FC } from 'react';

interface EqCheckboxProps {
    id: string;
    name: string;
    value: string;
}

const EqCheckbox: FC<EqCheckboxProps> = ({ id, name, value }) => {
    return (
        <label>
            <input type='checkbox' name={name} id={id} value={value} />
            <span>{value}</span>
        </label>
    );
};

export default EqCheckbox;
