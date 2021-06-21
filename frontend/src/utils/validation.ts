export const validation = (data: any) => {
    const requiredFields = [
        'race',
        'playerClass',
        'avatar',
        'charName',
        'background',
        'alignment',
        'faith',
        'lifestyle',
        'hair',
        'skin',
        'eyes',
        'height',
        'weight',
        'gender',
        'mWeapon',
        'sWeapon',
        'potions',
        'stuff',
    ];

    const missedFields = requiredFields.filter((field: string) => data[field] === null || data[field] === undefined || data[field] === '');

    return missedFields;
};
