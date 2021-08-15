
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Lottie from 'react-lottie';

const ApplicationItem = (props) => {

    function moreBtnClicked() {

    }

    return (
        <Container style={{width: "100%", height: 540, backgroundColor: props.bgColor}}>
            <Row>
                <Col>
                    {props.left==="true" ? <Lottie options={{loop: true, autoplay: true, animationData: props.imgSrc, rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }}}
                                height={430}
                                width={430}
                                isClickToPauseDisabled={true}
                                style={{margin: 40}}
                                isStopped={false}
                                isPaused={false}/>
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
                    </div> : <Lottie options={{loop: true, autoplay: true, animationData: props.imgSrc, rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }}}
                                height={430}
                                width={430}
                                isClickToPauseDisabled={true}
                                style={{margin: 40}}
                                isStopped={false}
                                isPaused={false}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default ApplicationItem;