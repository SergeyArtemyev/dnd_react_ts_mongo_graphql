import { useEffect, useState } from 'react';

export const useProfSkills = (dataObject: any) => {
    const [skills, setSkills] = useState<string[]>([]);

    useEffect(() => {
        for (let [key, value] of Object.entries<string>(dataObject)) {
            if (/skill/i.test(key)) {
                setSkills((state) => [...state, value]);
            }
        }
        // eslint-disable-next-line
    }, []);

    return skills;
};
