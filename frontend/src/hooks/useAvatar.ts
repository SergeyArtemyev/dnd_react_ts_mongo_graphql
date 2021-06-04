import React, { useState } from 'react';
import human from '../../src/img/form_img/human.jpg';
import elf from '../../src/img/form_img/elf.jpg';
import halfling from '../../src/img/form_img/halfling.jpg';
import dwarf from '../../src/img/form_img/dwarf.jpg';

export const useAvatar = () => {
    const [raceAvatar, setRaseAvatar] = useState('');
    const [raceName, setRaceName] = useState('');

    const onChangeAvatar = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        setRaceName(e.target.value);

        if (raceName === 'Human') {
            setRaseAvatar(human);
        } else if (raceName === 'Elf') {
            setRaseAvatar(elf);
        } else if (raceName === 'Halfling') {
            setRaseAvatar(halfling);
        } else if (raceName === 'Dwarf') {
            setRaseAvatar(dwarf);
        } else {
            setRaseAvatar('');
        }
    };

    return { raceAvatar, raceName, onChangeAvatar };
};
