import { useState, useLayoutEffect } from 'react';

export const useControls = () => {
    const [links, setLinks] = useState<HTMLCollectionOf<HTMLAnchorElement>>();
    const [next, setNext] = useState<HTMLButtonElement>();
    const [prev, setPrev] = useState<HTMLButtonElement>();
    const [submit, setSubmit] = useState<HTMLButtonElement>();

    useLayoutEffect(() => {
        setLinks(document.querySelector('.tabs')!.getElementsByTagName('a'));
        setNext((document.querySelector('.next') as HTMLButtonElement) && (document.querySelector('.next') as HTMLButtonElement));
        setPrev((document.querySelector('.prev') as HTMLButtonElement) && (document.querySelector('.prev') as HTMLButtonElement));
        setSubmit((document.querySelector("button[type='submit']") as HTMLButtonElement) && (document.querySelector("button[type='submit']") as HTMLButtonElement));
        // eslint-disable-next-line
    }, []);

    const prevButton = () => {
        if (links && prev && next) {
            for (let i = 0; i < links.length; i++) {
                if (i > 0) {
                    (next.firstChild as HTMLSpanElement).innerHTML = 'Next';
                }
                if (i === 1) {
                    prev.style.display = 'none';
                } else {
                    next.style.display = 'inline-block';
                    prev.style.display = 'inline-block';
                }
                if (links[i].classList.contains('active')) {
                    links[i].classList.remove('active');
                    (links[i].parentElement as HTMLLIElement).classList.add('disabled');
                    (links[i - 1].parentElement as HTMLLIElement).classList.remove('disabled');
                    links[i - 1].click();
                    break;
                }
            }
        }
    };

    const nextButton = () => {
        if (links && prev && next) {
            for (let i = 0; i < links.length; i++) {
                if (i > 3 && submit) {
                    return submit.click();
                }
                if (links[i].classList.contains('active')) {
                    if (i === 3) {
                        (next.firstChild as HTMLSpanElement).innerHTML = 'Submit';
                    } else {
                        next.style.display = 'inline-block';
                        prev.style.display = 'inline-block';
                    }
                    links[i].classList.remove('active');
                    (links[i].parentElement as HTMLLIElement).classList.add('disabled');
                    (links[i + 1].parentElement as HTMLLIElement).classList.remove('disabled');
                    links[i + 1].click();
                    break;
                }
            }
        }
    };

    return [nextButton, prevButton];
};
