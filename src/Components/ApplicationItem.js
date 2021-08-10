
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ApplicationItem = (props) => {

    function moreBtnClicked() {

    }

    return (
        <Container style={{width: "100%", height: 540, backgroundColor: props.bgColor}}>
            <Row>
                <Col>
                    {props.left==="true" ? <img src={props.imgSrc} alt="logo" style={{width: 430, height: 430, margin: 40}}/>
                    : <div style={{margin: 100}}>
                        <h3>{props.title}</h3>
                        <p style={{color: 'gray'}}>{props.body}</p>
                        <span style={{color: "rgb(32, 123, 230)"}} onClick={moreBtnClicked}>更多</span>
                    </div>}
                </Col>
                <Col>
                    {props.left==="true" ? <div style={{margin: 100}}>
                        <h3>{props.title}</h3>
                        <p style={{color: 'gray'}}>{props.body}</p>
                        <span style={{color: "rgb(32, 123, 230)"}} onClick={moreBtnClicked}>更多</span>
                    </div> : <img src={props.imgSrc} alt="logo" style={{width: 430, height: 430, margin: 40}}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default ApplicationItem;