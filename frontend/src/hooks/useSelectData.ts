import { useEffect, useState } from 'react';
import { languages, cantrips, toolProf } from '../utils/selectData';

export interface SelectData {
    human?: {
        language: string[];
    };
    elf?: {
        language: string[];
        cantrips: string[];
    };
    dwarf?: {
        toolProf: string[];
    };
}

export const useSelectData = (raceName: string) => {
    const [selectData, setSelectData] = useState<SelectData>();

    useEffect(() => {
        switch (raceName) {
            case 'Human':
                setSelectData({ human: { language: languages } });
                break;
            case 'Elf':
                setSelectData({ elf: { language: languages, cantrips } });
                break;
            case 'Dwarf':
                setSelectData({ dwarf: { toolProf } });
                break;
            default:
                setSelectData(undefined);
        }
    }, [raceName]);
    return selectData;
};
