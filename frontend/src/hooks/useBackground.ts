import { useSelector } from 'react-redux';
import { Background } from '../store/reducers/backgroundReducer';
import { AppState } from '../store/store';

export interface BackgroundDescription {
    info?: string;
    skillProff?: string[];
    backFeature?: string;
    featureInfo?: string;
    toolProff?: string;
    vehicleProff?: string;
}

export const useBackground = (backgroundName: string): BackgroundDescription => {
    const backgrounds: Background[] = useSelector((state: AppState) => state.background);

    if (backgroundName) {
        const [background] = backgrounds.filter((background: Background) => background.id === backgroundName);
        const {
            description: { info, skillProff, backFeature, featureInfo, toolProff, vehicleProff },
        } = background;

        return { info, skillProff, backFeature, featureInfo, toolProff, vehicleProff };
    }

    return { info: undefined, skillProff: undefined, backFeature: undefined, featureInfo: undefined, toolProff: undefined, vehicleProff: undefined };
};
