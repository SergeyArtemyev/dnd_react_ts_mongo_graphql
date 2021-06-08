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

        if (e.target.value === 'Human') {
            setRaseAvatar(human);
        } else if (e.target.value === 'Elf') {
            setRaseAvatar(elf);
        } else if (e.target.value === 'Halfling') {
            setRaseAvatar(halfling);
        } else if (e.target.value === 'Dwarf') {
            setRaseAvatar(dwarf);
        } else {
            setRaseAvatar('');
        }
    };

    return { raceAvatar, raceName, onChangeAvatar };
};
