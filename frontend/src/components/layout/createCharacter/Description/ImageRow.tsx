import { FC } from 'react';

interface ImageRowProps {
    raceName: string;
    onClick: () => void;
}

const ImageRow: FC<ImageRowProps> = ({ raceName, onClick }) => {
    return (
        <div className='row mb-1'>
            <div className='col s3'>
                <img onClick={onClick} className='avatar-img' src={require(`../../../../img/avatars/${raceName}/${raceName}1.jpeg`).default} alt={`${raceName} avatar`} />
            </div>
            <div className='col s3'>
                <img onClick={onClick} className='avatar-img' src={require(`../../../../img/avatars/${raceName}/${raceName}2.jpeg`).default} alt={`${raceName} avatar`} />
            </div>
            <div className='col s3'>
                <img onClick={onClick} className='avatar-img' src={require(`../../../../img/avatars/${raceName}/${raceName}3.jpeg`).default} alt={`${raceName} avatar`} />
            </div>
            <div className='col s3'>
                <img onClick={onClick} className='avatar-img' src={require(`../../../../img/avatars/${raceName}/${raceName}4.jpeg`).default} alt={`${raceName} avatar`} />
            </div>
        </div>
    );
};

export default ImageRow;
