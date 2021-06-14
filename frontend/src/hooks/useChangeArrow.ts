import React from 'react';

export const useChangeArrow = () => {
    const changeArrow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let iconArrow = document.querySelectorAll('.icon-arrow');
        let lis = document.querySelectorAll('.desc-li');
        for (let i = 0; i < lis.length; i++) {
            if (
                (e.target as HTMLDivElement).parentElement === lis[i] ||
                (e.target as HTMLDivElement).parentElement!.parentElement === lis[i]
            ) {
                if (iconArrow[i].innerHTML === 'arrow_downward') {
                    iconArrow[i].innerHTML = 'arrow_upward';
                } else {
                    iconArrow[i].innerHTML = 'arrow_downward';
                }
            }
        }
    };

    return changeArrow;
};
