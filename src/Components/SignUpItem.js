import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const SignUpItem = (props) => {

    return (
        <div style={{width: "70%", margin: "auto", marginTop: 60}}>
            <InputGroup className="mb-3">
                <InputGroup.Text>姓名</InputGroup.Text>
                <FormControl aria-label="First name" placeholder="名字"/>
                <FormControl aria-label="Last name" placeholder="姓"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <Button variant="outline-secondary">企业会员注册</Button>
                <Button variant="outline-secondary">个人会员注册</Button>
                <Button variant="outline-secondary">推荐人推荐注册</Button>
                <FormControl aria-label="Example text with two button addons" />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                    placeholder="用户名"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">密码</InputGroup.Text>
                <FormControl
                    placeholder="密码"
                    type="password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    />
            </InputGroup>
            <Button variant="info" size="lg" style={{width: '80%', color: 'white'}}>
                完成注册
            </Button>
        </div>
    )
}

export default SignUpItem;