import { FC, useState, useEffect } from 'react';
import { SelectData } from '../../hooks/useSelectData';

interface SelectProps {
    label: string;
    selectData?: SelectData;
}

const Select: FC<SelectProps> = ({ label, selectData }) => {
    const [values, setValues] = useState<string[]>();

    useEffect(() => {
        if (label && selectData) {
            // eslint-disable-next-line
            for (const [key1, values1] of Object.entries(selectData)) {
                for (const [key2, values2] of Object.entries<string[]>(values1)) {
                    if (new RegExp(key2, 'i').test(label)) {
                        setValues(values2);
                    }
                }
            }
        }
    }, [label, selectData]);

    return (
        <>
            {values?.map((val: string, index: number) => (
                <option key={index} value={val}>
                    {val}
                </option>
            ))}
        </>
    );
};

export default Select;
