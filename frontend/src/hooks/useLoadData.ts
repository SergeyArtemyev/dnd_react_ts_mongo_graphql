import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadRaces } from '../actions/races';
import { loadClasses } from '../actions/classes';
import { loadBackground } from '../actions/backgorund';
import { useQuery } from '@apollo/client';
import { getRaces, getClasses, getBackground, getPlayer } from '../gql/queries';
import { createCharacter } from '../actions/player';

export const useLoadData = () => {
    const { data: racesData } = useQuery(getRaces);
    const { data: classesData } = useQuery(getClasses);
    const { data: backgroundData } = useQuery(getBackground);
    const { data: playerData } = useQuery(getPlayer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (racesData && classesData && backgroundData && playerData) {
            dispatch(loadRaces(racesData.getRaces.races));
            dispatch(loadClasses(classesData.getClasses.classes));
            dispatch(loadBackground(backgroundData.getBackground.background));
            dispatch(createCharacter(playerData.getPlayer.player[0]));
        }
    }, [dispatch, racesData, classesData, backgroundData, playerData]);
};
