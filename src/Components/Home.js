import React, {useRef, useEffect} from 'react';
import { Container, Image, Col, Row} from 'react-bootstrap';
import bgImg1 from '../Assets/bgImg1.png'
import bgImg2 from '../Assets/bgImg2.png'
import bgImg3 from '../Assets/bgImg3.png'
import bgImg4 from '../Assets/bgImg4.png'
import bgImg5 from '../Assets/bgImg5.png'
import bgImg6 from '../Assets/bgImg6.png'
import BottomSection from './BottomSection';
import Lottie from 'lottie-react';
import animationData from '../Assets/Lottie/building.json'
import animationData2 from '../Assets/Lottie/search.json'
import animationData3 from '../Assets/Lottie/tutorial.json'
import animationData4 from '../Assets/Lottie/signup.json'
import animationData5 from '../Assets/Lottie/applications.json'
import animationData6 from '../Assets/Lottie/meeting.json'
import { Button } from 'react-bootstrap';
import { init } from 'ityped'

const Home = (props) => {

    const lottieRefBuidling = useRef()
    const lottieRefSearch = useRef()
    const lottieRefSignup = useRef()
    const lottieRefTutorial = useRef()
    const lottieRefApps = useRef()

    useEffect(()=>{
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['快速，方便的让用户和房企通合二为一，达成更多。'], loop: true, typeSpeed: 130 })
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div id="myElement" style={{fontFamily: 'sans-serif', fontSize: 30, marginTop: 120, height: 80}}></div>
                        <p style={{fontFamily:'sans-serif', marginTop: 30}}>帮助你的团队提供不同的视角，做适合的决策</p>
                        <Button variant="primary" style={{backgroundColor: '#4476BD', borderRadius: 18, marginTop: 20}} href="/vipsignup">会员注册</Button>
                        <div style={{marginTop: 30}}>
                            <span style={{fontFamily:'sans-serif', color: 'gray', marginTop: 20, fontSize: 13}}>创建一个账户</span><br />
                            <span style={{fontFamily:'sans-serif', color: 'gray', marginTop: 20, fontSize: 13}}>快捷，免费，便利</span>
                        </div>
                    </Col>
                    <Col>
                        <Lottie animationData={animationData6} style={{width: 540, height: 540}}/>
                    </Col>
                </Row>
            </Container>
            <div style={{width: "100%", height: 138}}>
                <div style={{width: "100%", height: "100%", position: "absolute", marginTop: 35}}>
                    <h4>房企通</h4>
                    <span style={{color: 'gray'}}>———— 房企通提供无限可能 ————</span>
                </div>
                <Image style={{width: "100%", height: '100%', backgroundImage: `url(${bgImg6})`, opacity: 0.06}} />
            </div>
            <div style={{width: "100%", height: 310}}>
                <a style={{width: "20%", height: 310, float: "left", backgroundColor: 'gray'}} href="/service">
                    <img src={bgImg1} alt="bg" style={{width: '100%', height: 310, opacity: 0.2}}/>
                    <div style={{position: 'absolute', width: '20%', marginTop: -205}}>
                    <Lottie animationData={animationData} style={{width: 100, height: 100, marginLeft: window.innerWidth*0.2/2-50}} lottieRef={lottieRefBuidling}/>
                        <h5 style={{color: 'white', marginTop: -10}}>房企通服务</h5>
                    </div>
                </a>
                <a style={{width: "20%", height: 310, float: "left", backgroundColor: 'gray'}} href="/search" onMouseEnter={()=>{lottieRefSearch.current.play()}}>
                    <img src={bgImg2} alt="bg" style={{width: '100%', height: 310, opacity: 0.2}}/>
                    <div style={{position: 'absolute', width: '20%', marginTop: -205}}>
                    <Lottie animationData={animationData2} style={{width: 80, height: 80, marginLeft: window.innerWidth*0.2/2-40}} lottieRef={lottieRefSearch} onLoopComplete={()=> {lottieRefSearch.current.goToAndStop(0, true)}}/>
                        <h5 style={{color: 'white', marginTop: 10}}>房税搜</h5>
                    </div>
                </a>
                <a style={{width: "20%", height: 310, float: "left", backgroundColor: 'gray'}} href="/tutorial">
                    <img src={bgImg3} alt="bg"style={{width: '100%', height: 310, opacity: 0.2}}/>
                    <div style={{position: 'absolute', width: '20%', marginTop: -205}}>
                    <Lottie animationData={animationData3} style={{width: 80, height: 80, marginLeft: window.innerWidth*0.2/2-40}} lottieRef={lottieRefTutorial} />
                        <h5 style={{color: 'white', marginTop: 10}}>在线培训</h5>
                    </div>
                </a>
                <a style={{width: "20%", height: 310, float: "left", backgroundColor: 'gray'}} href="/vipsignup" onMouseEnter={()=>{
                    lottieRefSignup.current.goToAndStop(0, true)
                    lottieRefSignup.current.play()
                    }}>
                    <img src={bgImg4} alt="bg"style={{width: '100%', height: 310, opacity: 0.2}}/>
                    <div style={{position: 'absolute', width: '20%', marginTop: -205}}>
                    <Lottie animationData={animationData4} style={{width: 80, height: 80, marginLeft: window.innerWidth*0.2/2-40}} lottieRef={lottieRefSignup} onLoopComplete={()=> {lottieRefSignup.current.goToAndStop(899, true)}}/>
                        <h5 style={{color: 'white', marginTop: 10}}>会员注册</h5>
                    </div>
                </a>
                <a style={{width: "20%", height: 310, float: "left", backgroundColor: 'gray'}} href="/applications">
                    <img src={bgImg5} alt="bg" style={{width: '100%', height: 310, opacity: 0.2}}/>
                    <div style={{position: 'absolute', width: '20%', marginTop: -205}}>
                    <Lottie animationData={animationData5} style={{width: 80, height: 80, marginLeft: window.innerWidth*0.2/2-40}} lottieRef={lottieRefApps}/>
                        <h5 style={{color: 'white', marginTop: 10}}>应用软件</h5>
                    </div>
                </a>
            </div>
            <BottomSection />
        </div>
    )
}

export default Home;