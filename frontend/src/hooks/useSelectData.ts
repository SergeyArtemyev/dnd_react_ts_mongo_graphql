import { useEffect, useState } from 'react';
import { languages, cantrips, toolProf } from '../utils/selectData';

export interface SelectData {
    human: {
        language: string[];
    };
    elf: {
        language: string[];
        cantrips: string[];
    };
    dwarf: {
        tool: string[];
    };
}

export const useSelectData = () => {
    const [selectData, setSelectData] = useState<SelectData>();

    useEffect(() => {
        setSelectData({
            human: {
                language: languages,
            },
            elf: {
                language: languages,
                cantrips: cantrips,
            },
            dwarf: {
                tool: toolProf,
            },
        });
    }, []);

    return selectData;
};
