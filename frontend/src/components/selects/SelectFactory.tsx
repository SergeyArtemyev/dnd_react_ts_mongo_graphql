import { FC, useState, useEffect } from 'react';
import { useSelectData } from '../../hooks/useSelectData';
import Select from './Select';

interface SelectFactoryProps {
    raceName?: string;
}

const SelectFactory: FC<SelectFactoryProps> = ({ raceName }) => {
    const [fullLabel, setFullLabel] = useState<string[]>();

    const selectDataObject = useSelectData();

    // for race traits selects
    useEffect(() => {
        if (raceName) {
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
        }
    }, [raceName]);

    return (
        <>
            {fullLabel?.map((label: string, index: number) => (
                <div key={index}>
                    <label>{label}</label>
                    <select className='browser-default' id={label}>
                        <option value='none' defaultValue='true'>
                            - Choose {label} -
                        </option>
                        <Select raceName={raceName} label={label} selectData={selectDataObject} />
                    </select>
                </div>
            ))}
        </>
    );
};

export default SelectFactory;
