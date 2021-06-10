import React from 'react';
import { useDispatch } from 'react-redux';

export const useOnChange = () => {
    const dispatch = useDispatch();
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.id;
        const value = e.target.value;

        const type = `GET_PLAYER_${id.split(' ').join('_').toUpperCase()}`;
        console.log(id);
        console.log(value);

        dispatch({
            type,
            payload: value,
        });
    };
};
