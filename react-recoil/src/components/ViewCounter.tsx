import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterState } from '../recoil/count';

const ViewCounter = () => {
    const counter = useRecoilValue(counterState);

    return (
        <div>
            <p>{counter}</p>
        </div>
    )
};

export default ViewCounter