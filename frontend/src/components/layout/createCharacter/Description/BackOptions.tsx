import { FC } from 'react';
import SelectFactory from '../../../selects/SelectFactory';

interface BackOptionsProps {
    background: string;
}

const BackOptions: FC<BackOptionsProps> = ({ background }) => {
    switch (background) {
        case 'Acolyte':
            return (
                <>
                    <SelectFactory dataName={background} selectName='adLang1' label='Additional Language' />
                    <SelectFactory dataName={background} selectName='adLang2' label='Additional Language' />
                </>
            );
        case 'Criminal or Spy':
            return <SelectFactory dataName={background} selectName='gameSet' label='Game Set' />;
        case 'Folk Hero':
            return <SelectFactory dataName={background} selectName='artisanTool' label='Artisan Tool' />;
        case 'Haunted One':
            return <SelectFactory dataName={background} selectName='adLang' label='Additional Language' />;
        case 'Sage':
            return (
                <>
                    <SelectFactory dataName={background} selectName='adLang1' label='Additional Language' />
                    <SelectFactory dataName={background} selectName='adLang2' label='Additional Language' />
                </>
            );
        case 'Soldier':
            return <SelectFactory dataName={background} selectName='gameSet' label='Game Set' />;
        default:
            return <></>;
    }
};

export default BackOptions;
