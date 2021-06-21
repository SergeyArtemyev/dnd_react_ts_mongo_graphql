import { createCharacter } from '../actions/player';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { getPlayer } from '../gql/queries';

export const useLoadPlayer = () => {
    const { id } = useParams<{ id: any }>();
    const [loadingPlayer, setLoading] = useState(true);
    const { data: playerData } = useQuery(getPlayer, { variables: { id } });
    const dispatch = useDispatch();

    useEffect(() => {
        if (playerData) {
            dispatch(createCharacter(playerData.getPlayer));
            setLoading(false);
        }
    }, [dispatch, playerData]);

    return loadingPlayer;
};
