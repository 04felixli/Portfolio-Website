import React, { useEffect } from 'react';

interface Props {
    onClick: () => void;
}

const GrayBg = ({ onClick }: Props) => {

    const handleClick = (): void => {
        onClick();
    }

    return (
        <div className={'fixed inset-0 bg-gray-600 bg-opacity-50 z-5'} onClick={handleClick}>
        </div>
    );
}

export default GrayBg;