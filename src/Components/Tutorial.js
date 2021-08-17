import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import bgImg1 from '../Assets/bgImg1.png'
import bgImg2 from '../Assets/bgImg2.png'
import bgImg3 from '../Assets/bgImg3.png'
import BottomSection from './BottomSection';
import Lottie from 'react-lottie';
import taxAnimation from '../Assets/Lottie/tax.json'
import finAnimation from '../Assets/Lottie/finance.json'
import opAnimation from '../Assets/Lottie/operation.json'

const Tutorial = (props) => {
    return (
        <div>
            <Container style={{marginTop: 60, paddingBottom: 60}}>
                <Row>
                    <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={bgImg1} alt="Loading" style={{height: 300, opacity: 0.6}}/>
                        <Card.ImgOverlay>
                            <Card.Title>房地产税收</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam。
                            </Card.Text>
                            <Card.Text>文案此处</Card.Text>
                            <Lottie options={{loop: true, autoplay: true, animationData: taxAnimation, rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }}}
                                height={80}
                                width={80}
                                isClickToPauseDisabled={true}
                                isStopped={false}
                                isPaused={false}/>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={bgImg2} alt="Loading" style={{height: 300, opacity: 0.6}}/>
                        <Card.ImgOverlay>
                            <Card.Title>房地产财务管理</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Card.Text>
                            <Card.Text>文案此处</Card.Text>
                            <Lottie options={{loop: true, autoplay: true, animationData: finAnimation, rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }}}
                                height={80}
                                width={80}
                                isClickToPauseDisabled={true}
                                isStopped={false}
                                isPaused={false}/>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={bgImg3} alt="Loading" style={{height: 300, opacity: 0.6}}/>
                        <Card.ImgOverlay>
                            <Card.Title>房地产运营管理</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Card.Text>
                            <Card.Text>文案此处</Card.Text>
                            <Lottie options={{loop: true, autoplay: true, animationData: opAnimation, rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }}}
                                height={80}
                                width={80}
                                isClickToPauseDisabled={true}
                                isStopped={false}
                                isPaused={false}/>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                </Row>
            </Container>
            <BottomSection />
        </div>
    )
}

export default Tutorial;