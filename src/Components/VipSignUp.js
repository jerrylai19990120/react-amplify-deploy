import React from 'react';
import FNavBar from './FNavBar';
import SignUpItem from './SignUpItem';
import BottomSection from './BottomSection';
import Lottie from 'lottie-react';
import signupAnimation from '../Assets/Lottie/signup2.json'
import logo from '../Assets/logo.png'

const VipSignUp = (props) => {
    return (
        <div>
            <FNavBar />
            <div style={{margin: 36}}>
                <div style={{float: 'left', marginLeft: "13%", marginTop: 60}}>
                    <div style={{display: 'inline-block'}}>
                        <img src={logo} alt="logo" style={{width: 60, height: 60, display: 'inline'}}/>
                        <h2 style={{display: 'inline'}}>房企通</h2>
                    </div>
                    <div style={{display: 'inline-block', marginLeft: 40}}>
                        <h4 style={{color: 'gray'}}>一次注册，终生受用</h4>
                        <h5 style={{color: 'gray', marginTop: 20}}>完成一下表单即刻完成会员注册</h5>
                    </div>
                </div>
                <Lottie animationData={signupAnimation} style={{width: '50%', height: 200, float: 'right', marginBottom: 30}}/>
            </div>
            <SignUpItem />
            <div style={{height: 60}}></div>
            <BottomSection />
        </div>
    )
}

export default VipSignUp;