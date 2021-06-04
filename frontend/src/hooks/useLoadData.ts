import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadRaces } from '../actions/races';
import { loadClasses } from '../actions/classes';
import { loadBackground } from '../actions/backgorund';
import { useQuery } from '@apollo/client';
import { getRaces, getClasses, getBackground } from '../gql/queries';

export const useLoadData = () => {
    const { data: racesData } = useQuery(getRaces);
    const { data: classesData } = useQuery(getClasses);
    const { data: backgroundData } = useQuery(getBackground);
    const dispatch = useDispatch();

    useEffect(() => {
        if (racesData && classesData && backgroundData) {
            dispatch(loadRaces(racesData.getRaces.races));
            dispatch(loadClasses(classesData.getClasses.classes));
            dispatch(loadBackground(backgroundData.getBackground.background));
        }
    }, [dispatch, racesData, classesData, backgroundData]);
};
