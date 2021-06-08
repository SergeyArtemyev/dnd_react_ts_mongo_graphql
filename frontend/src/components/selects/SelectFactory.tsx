import { FC, useState, useEffect } from 'react';
import { useSelectData } from '../../hooks/useSelectData';
import Select from './Select';

interface SelectFactoryProps {
    raceName: string;
}

const SelectFactory: FC<SelectFactoryProps> = ({ raceName }) => {
    let [fullLabel, setFullLabel] = useState<string[]>();
    const selectDataObject = useSelectData(raceName);

    // for race traits selects
    useEffect(() => {
        switch (raceName) {
            case 'Human':
                setFullLabel(['Extra Language']);
                break;
            case 'Elf':
                setFullLabel(['Cantrips', 'Extra Language']);
                break;
            case 'Dwarf':
                setFullLabel(['Tool Proficiensy']);
                break;
            default:
                setFullLabel(undefined);
        }
    }, [raceName, selectDataObject]);

    return (
        <>
            {fullLabel?.map((label: string, index: number) => (
                <div key={index}>
                    <label>{label}</label>
                    <select className='browser-default'>
                        <option value='none'>- Choose {label}</option>
                        <Select label={label} selectData={selectDataObject} />
                    </select>
                </div>
            ))}
        </>
    );
};

export default SelectFactory;
