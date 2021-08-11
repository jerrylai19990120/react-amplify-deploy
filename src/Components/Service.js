import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FNavBar from './FNavBar';
import bgImg1 from '../Assets/bgImg1.png'
import bgImg2 from '../Assets/bgImg2.png'
import bgImg3 from '../Assets/bgImg3.png'
import BottomSection from './BottomSection';

const Service = (props) => {

    return (
        <div>
            <FNavBar/>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '24rem', height: '28rem', marginTop: 30 }}>
                            <Card.Img variant="top" src={bgImg1} />
                            <Card.Body>
                                <Card.Title>土地投标及合作开发利润分析</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">详情</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '24rem', height: '28rem', marginTop: 30 }}>
                            <Card.Img variant="top" src={bgImg2} />
                            <Card.Body>
                                <Card.Title>规划设计方案强排服务</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">详情</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '24rem', height: '28rem', marginTop: 30 }}>
                            <Card.Img variant="top" src={bgImg3} />
                            <Card.Body>
                                <Card.Title>分期建设方案强排服务</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">详情</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '24rem', height: '28rem', marginTop: 30 }}>
                            <Card.Img variant="top" src={bgImg3} />
                            <Card.Body>
                                <Card.Title>土地增值税清算审核服务</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">详情</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '24rem', height: '28rem', marginTop: 30 }}>
                            <Card.Img variant="top" src={bgImg3} />
                            <Card.Body>
                                <Card.Title>地产项目开发运营决策支持</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">详情</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '24rem', height: '28rem', marginTop: 30 }}>
                            <Card.Img variant="top" src={bgImg3} />
                            <Card.Body>
                                <Card.Title>营销策划</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">详情</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '24rem', height: '28rem', marginTop: 30 }}>
                            <Card.Img variant="top" src={bgImg3} />
                            <Card.Body>
                                <Card.Title>规划设计</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">详情</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '24rem', height: '28rem', marginTop: 30 }}>
                            <Card.Img variant="top" src={bgImg3} />
                            <Card.Body>
                                <Card.Title>工程监理</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">详情</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <BottomSection />
        </div>
    )
}

export default Service;