import React from 'react';
import FNavBar from './FNavBar';
import SignUpItem from './SignUpItem';
import BottomSection from './BottomSection';

const VipSignUp = (props) => {
    return (
        <div>
            <FNavBar />
            <SignUpItem />
            <div style={{height: 60}}></div>
            <BottomSection />
        </div>
    )
}

export default VipSignUp;