import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QJone from './QJone';

const RightAside = () => {
    return (
        <div className='px-4'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QJone></QJone>
        </div>
    );
};

export default RightAside;