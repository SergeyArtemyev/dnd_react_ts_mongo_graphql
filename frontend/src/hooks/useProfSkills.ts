import { useEffect, useState } from 'react';
import { Player } from '../store/reducers/playerReducer';

export const useProfSkills = (dataObject: Player): string[] => {
    const [skills, setSkills] = useState<string[]>([]);

    useEffect(() => {
        const uniqueSkills = new Set<string>();
        for (let [key, value] of Object.entries(dataObject)) {
            if (/skill/i.test(key)) {
                uniqueSkills.add(value);
            }
        }
        setSkills([...uniqueSkills]);
        // eslint-disable-next-line
    }, []);
    return skills;
};
