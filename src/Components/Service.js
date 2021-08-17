import React, {useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import bgImg1 from '../Assets/bgImg1.png'
import bgImg2 from '../Assets/bgImg2.png'
import bgImg3 from '../Assets/bgImg3.png'
import bgImg7 from '../Assets/bgImg7.png'
import bgImg8 from '../Assets/bgImg8.png'
import bgImg9 from '../Assets/bgImg9.png'
import bgImg10 from '../Assets/bgImg10.png'
import bgImg11 from '../Assets/bgImg11.png'
import BottomSection from './BottomSection';
import Pagination from 'react-bootstrap/Pagination'

const Service = (props) => {

    const [active, setActive] = useState(1)
    let items = [];
    for (let number = 1; number <= 2; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>{
                setActive(number)
            }}>
            {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            <Container style={{paddingBottom: 60}}>
                {active === 1 ? <Row>
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
                            <Card.Img variant="top" src={bgImg7} />
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
                            <Card.Img variant="top" src={bgImg8} />
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
                            <Card.Img variant="top" src={bgImg9} />
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
                </Row> : <Row>
                    <Col>
                        <Card style={{ width: '24rem', height: '28rem', marginTop: 30 }}>
                            <Card.Img variant="top" src={bgImg10} />
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
                            <Card.Img variant="top" src={bgImg11} />
                            <Card.Body>
                                <Card.Title>工程监理</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">详情</Button>
                            </Card.Body>
                        </Card>
                    </Col></Row>}
            </Container>
            <div style={{width: '100%', paddingLeft: '48%', paddingBottom: 30}}>
                <Pagination size="sm">{items}</Pagination>
            </div>
            <BottomSection />
        </div>
    )
}

export default Service;