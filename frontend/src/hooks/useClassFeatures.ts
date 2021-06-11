import { useSelector } from 'react-redux';
import { CharClass } from '../store/reducers/classReducer';
import { AppState } from '../store/store';

export const useClassFeatures = (className: string) => {
    const classes: CharClass[] = useSelector((state: AppState) => state.classes);
    if (className) {
        const [charclass] = classes.filter((charclass: CharClass) => charclass.id === className);

        const {
            classFeatures: { hitDie, primAbil, saves },
        } = charclass;

        return { hitDie, primAbil, saves };
    }

    return { hitDie: undefined, primAbil: undefined, saves: undefined };
};
