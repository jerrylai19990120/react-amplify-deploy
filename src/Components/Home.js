import React from 'react';
import FNavBar from './FNavBar';
import { Carousel, Image} from 'react-bootstrap';
import bgImg1 from '../Assets/bgImg1.png'
import bgImg2 from '../Assets/bgImg2.png'
import bgImg3 from '../Assets/bgImg3.png'
import bgImg4 from '../Assets/bgImg4.png'
import bgImg5 from '../Assets/bgImg5.png'
import bgImg6 from '../Assets/bgImg6.png'
import BottomSection from './BottomSection';

const Home = (props) => {
    return (
        <div>
            <FNavBar />
            <Carousel variant="light">
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={bgImg1}
                    alt="First"
                    height={500}
                    />
                    <Carousel.Caption>
                    <h5>房企通服务</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={bgImg2}
                    alt="Second"
                    height={500}
                    />
                    <Carousel.Caption>
                    <h5>房税搜</h5>
                    <p>文案此处</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={bgImg3}
                    alt="Third"
                    height={500}
                    />
                    <Carousel.Caption>
                    <h5>在线培训</h5>
                    <p>文案此处</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={bgImg4}
                    alt="Forth"
                    height={500}
                    />
                    <Carousel.Caption>
                    <h5>会员注册</h5>
                    <p>文案此处</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={bgImg5}
                    alt="Fifth"
                    height={500}
                    />
                    <Carousel.Caption>
                    <h5>应用软件</h5>
                    <p>文案此处</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={{width: "100%", height: 138}}>
                <div style={{width: "100%", height: "100%", position: "absolute", marginTop: 35}}>
                    <h4>房企通服务</h4>
                    <span style={{color: 'gray'}}>———— 服务由房企通提供 ————</span>
                </div>
                <Image style={{width: "100%", height: 138, backgroundImage: `url(${bgImg6})`, opacity: 0.06}} />
            </div>
            <div>
                <div style={{width: "20%", height: 300, display: "inline-block"}}>
                    
                </div>
                <div style={{width: "20%", height: 300, display: "inline-block"}}>

                </div>
                <div style={{width: "20%", height: 300, display: "inline-block"}}>

                </div>
                <div style={{width: "20%", height: 300, display: "inline-block"}}>

                </div>
                <div style={{width: "20%", height: 300, display: "inline-block"}}>

                </div>
            </div>
            {/*<div style={{width: "100%", height: 138}}>
                <div style={{width: "100%", height: "100%", position: "absolute", marginTop: 35}}>
                    <h4>房税搜</h4>
                    <span style={{color: 'gray'}}>———— 功能由房企通提供 ————</span>
                </div>
                <Image style={{width: "100%", height: 138, backgroundImage: `url(${bgImg6})`, opacity: 0.06}} />
            </div>

            <div style={{width: "100%", height: 138}}>
                <div style={{width: "100%", height: "100%", position: "absolute", marginTop: 35}}>
                    <h4>在线培训</h4>
                    <span style={{color: 'gray'}}>———— 培训由房企通提供 ————</span>
                </div>
                <Image style={{width: "100%", height: 138, backgroundImage: `url(${bgImg6})`, opacity: 0.06}} />
            </div>

            <div style={{width: "100%", height: 138}}>
                <div style={{width: "100%", height: "100%", position: "absolute", marginTop: 35}}>
                    <h4>会员注册</h4>
                    <span style={{color: 'gray'}}>———— 服务由房企通提供 ————</span>
                </div>
                <Image style={{width: "100%", height: 138, backgroundImage: `url(${bgImg6})`, opacity: 0.06}} />
            </div>

            <div style={{width: "100%", height: 138}}>
                <div style={{width: "100%", height: "100%", position: "absolute", marginTop: 35}}>
                    <h4>应用软件</h4>
                    <span style={{color: 'gray'}}>———— 软件由房企通提供 ————</span>
                </div>
                <Image style={{width: "100%", height: 138, backgroundImage: `url(${bgImg6})`, opacity: 0.06}} />
    </div>*/}
            <BottomSection />
        </div>
    )
}

export default Home;