import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../Assets/logo.png'

const FNavBar = (props) => {

    return (
        <Navbar bg="light" variant="light" sticky="top">
                <Navbar.Brand href="/">
                    <img
                        alt="Logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    房企通
                </Navbar.Brand>
                <Container>
                    <Nav className="me-auto">
                    <Nav.Link href="/service">房企通服务</Nav.Link>
                    <Nav.Link href="/search">房税搜</Nav.Link>
                    <Nav.Link href="/tutorial">在线培训</Nav.Link>
                    <Nav.Link href="/vipsignup">会员注册</Nav.Link>
                    <Nav.Link href="/applications">应用软件</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}

export default FNavBar;