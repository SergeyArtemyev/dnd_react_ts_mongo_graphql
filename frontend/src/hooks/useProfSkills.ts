import { useEffect, useState } from 'react';
import { Player } from '../store/reducers/playerReducer';

export const useProfSkills = (dataObject: Player): string[] => {
    const [skills, setSkills] = useState<string[]>([]);

    useEffect(() => {
        for (let [key, value] of Object.entries(dataObject)) {
            if (/skill/i.test(key)) {
                setSkills((state) => [...state, value]);
            }
        }

        // eslint-disable-next-line
    }, []);
    return skills;
};
