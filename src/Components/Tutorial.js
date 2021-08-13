import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import FNavBar from './FNavBar';
import bgImg1 from '../Assets/bgImg1.png'
import bgImg2 from '../Assets/bgImg2.png'
import bgImg3 from '../Assets/bgImg3.png'
import BottomSection from './BottomSection';

const Tutorial = (props) => {
    return (
        <div>
            <FNavBar />
            <Container style={{marginTop: 60, paddingBottom: 60}}>
                <Row>
                    <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={bgImg1} alt="Loading" style={{height: 300}}/>
                        <Card.ImgOverlay>
                            <Card.Title>房地产税收</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam。
                            </Card.Text>
                            <Card.Text>文案此处</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={bgImg2} alt="Loading" style={{height: 300}}/>
                        <Card.ImgOverlay>
                            <Card.Title>房地产财务管理</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Card.Text>
                            <Card.Text>文案此处</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={bgImg3} alt="Loading" style={{height: 300}}/>
                        <Card.ImgOverlay>
                            <Card.Title>房地产运营管理</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Card.Text>
                            <Card.Text>文案此处</Card.Text>
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