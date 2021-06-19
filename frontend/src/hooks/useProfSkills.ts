import { useEffect, useState } from 'react';
import { Player } from '../store/reducers/playerReducer';

export const useProfSkills = (dataObject: Player): string[] => {
    const [skills, setSkills] = useState<string[]>([]);

    useEffect(() => {
        const arr = [];
        for (let [key, value] of Object.entries(dataObject)) {
            if (/skill/i.test(key)) {
                arr.push(value);
            }
        }
        setSkills(arr);
        // eslint-disable-next-line
    }, []);
    return skills;
};
