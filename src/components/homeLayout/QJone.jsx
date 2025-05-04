import React from 'react';
import qzone_1 from '../../assets/swimming.png';
import qzone_2 from '../../assets/class.png';
import qzone_3 from '../../assets/playground.png';

const QJone = () => {
    return (
        <div className='mt-5 bg-base-200 p-4'>
            <h2 className='font-semibold text-xl mb-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img src={qzone_1} className='w-full mx-auto' alt="" />
                <img src={qzone_2} className='w-full mx-auto' alt="" />
                <img src={qzone_3} className='w-full mx-auto' alt="" />
            </div>
        </div>
    );
};

export default QJone;