import { FC } from 'react';
import { useSelectData } from '../../hooks/useSelectData';
import Select from './Select';

interface SelectFactoryProps {
    dataName: string;
    selectName: string;
    label: string;
}

const SelectFactory: FC<SelectFactoryProps> = ({ dataName, selectName, label }) => {
    const selectDataObject = useSelectData();
    return (
        <>
            <label>{label}</label>
            <select className='browser-default' id={selectName} name={selectName}>
                <option value='none' defaultValue='true'>
                    - Choose {label} -
                </option>
                <Select dataName={dataName} label={label} selectData={selectDataObject} />
            </select>
        </>
    );
};

export default SelectFactory;
