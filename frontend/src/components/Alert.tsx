import { FC } from 'react';

interface AlertProps {
    alertData: string[];
    setAlertData: (value: React.SetStateAction<string[]>) => void;
}

const Alert: FC<AlertProps> = ({ alertData, setAlertData }) => {
    const onClick = () => {
        setAlertData([]);
    };

    return (
        <div className='alert'>
            <span>
                You've missed some fields: <span className='white-text'>{alertData.join(', ')}</span>
            </span>
            <span className='close-alert' onClick={onClick}>
                &times;
            </span>
        </div>
    );
};

export default Alert;
