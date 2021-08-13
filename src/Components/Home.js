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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faSearch, faDesktop, faChalkboardTeacher, faUserPlus } from '@fortawesome/free-solid-svg-icons';

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
                    <h4>房企通</h4>
                    <span style={{color: 'gray'}}>———— 房企通提供无限可能 ————</span>
                </div>
                <Image style={{width: "100%", height: '100%', backgroundImage: `url(${bgImg6})`, opacity: 0.06}} />
            </div>
            <div style={{width: "100%", height: 310}}>
                <a style={{width: "20%", height: 310, float: "left", backgroundColor: 'gray'}} href="/service">
                    <img src={bgImg1} alt="bg" style={{width: '100%', height: 310, opacity: 0.2}}/>
                    <div style={{position: 'absolute', width: '20%', marginTop: -185}}>
                        <FontAwesomeIcon icon={faBuilding} style={{color: 'white', width: 50, height: 50}}/>
                        <h5 style={{color: 'white', marginTop: 10}}>房企通服务</h5>
                    </div>
                </a>
                <a style={{width: "20%", height: 310, float: "left", backgroundColor: 'gray'}} href="/search">
                    <img src={bgImg2} alt="bg" style={{width: '100%', height: 310, opacity: 0.2}}/>
                    <div style={{position: 'absolute', width: '20%', marginTop: -185}}>
                        <FontAwesomeIcon icon={faSearch} style={{color: 'white', width: 50, height: 50}}/>
                        <h5 style={{color: 'white', marginTop: 10}}>房税搜</h5>
                    </div>
                </a>
                <a style={{width: "20%", height: 310, float: "left", backgroundColor: 'gray'}} href="/tutorial">
                    <img src={bgImg3} alt="bg"style={{width: '100%', height: 310, opacity: 0.2}}/>
                    <div style={{position: 'absolute', width: '20%', marginTop: -185}}>
                        <FontAwesomeIcon icon={faChalkboardTeacher} style={{color: 'white', width: 50, height: 50}}/>
                        <h5 style={{color: 'white', marginTop: 10}}>在线培训</h5>
                    </div>
                </a>
                <a style={{width: "20%", height: 310, float: "left", backgroundColor: 'gray'}} href="/vipsignup">
                    <img src={bgImg4} alt="bg"style={{width: '100%', height: 310, opacity: 0.2}}/>
                    <div style={{position: 'absolute', width: '20%', marginTop: -185}}>
                        <FontAwesomeIcon icon={faUserPlus} style={{color: 'white', width: 50, height: 50}}/>
                        <h5 style={{color: 'white', marginTop: 10}}>会员注册</h5>
                    </div>
                </a>
                <a style={{width: "20%", height: 310, float: "left", backgroundColor: 'gray'}} href="/applications">
                    <img src={bgImg5} alt="bg" style={{width: '100%', height: 310, opacity: 0.2}}/>
                    <div style={{position: 'absolute', width: '20%', marginTop: -185}}>
                        <FontAwesomeIcon icon={faDesktop} style={{color: 'white', width: 50, height: 50}}/>
                        <h5 style={{color: 'white', marginTop: 10}}>应用软件</h5>
                    </div>
                </a>
            </div>
            <BottomSection />
        </div>
    )
}

export default Home;