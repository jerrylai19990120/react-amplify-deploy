import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../Assets/logo.png';

const BottomSection = (props) => {

    return (
        <div style={{width: "100%", height: 400, marginTop: 60}}>
            <div style={{width: "100%", height: "80%", backgroundColor: "rgb(39, 41, 47)", paddingTop: 60}}>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <h3 style={{color: 'white'}}>技术支持</h3>
                                <ul style={{listStyle: 'none', paddingLeft: 0, paddingTop: 20}}>
                                    <li>
                                        <span style={{color: 'gray'}}>用户手册</span>
                                    </li>
                                    <li style={{paddingTop: 10}}>
                                        <span style={{color: 'gray'}}>广东泰格软件技术支持</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h3 style={{color: 'white'}}>关于我们</h3>
                                <ul style={{listStyle: 'none', paddingLeft: 0, paddingTop: 20}}>
                                    <li>
                                        <span style={{color: 'gray'}}>广州天地智源企业管理有限公司</span>
                                    </li>
                                    <li style={{paddingTop: 10}}>
                                        <span style={{color: 'gray'}}>加入我们</span>
                                    </li>
                                    <li style={{paddingTop: 10}}>
                                        <span style={{color: 'gray'}}>联系我们</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src={logo} alt="logo" style={{width: 120, height: 120, display: 'inline-block'}}/>
                                <h3 style={{color: 'white', display: 'inline-block'}}>房企通</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{width: "100%", height: "20%", backgroundColor: "rgb(25, 25, 25)", paddingTop: 30}}>
                <span style={{color: 'gray'}}>©广州天地智源企业管理有限公司 版权所有 | 技术支持： 广东泰格软件有限公司</span>
            </div>
        </div>
    )

}

export default BottomSection;