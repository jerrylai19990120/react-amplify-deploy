import React from 'react';
import ApplicationItem from './ApplicationItem';
import BottomSection from './BottomSection';
import product1Animation from '../Assets/Lottie/product1.json'
import product2Animation from '../Assets/Lottie/product2.json'
import product3Animation from '../Assets/Lottie/product3.json'
import product4Animation from '../Assets/Lottie/product4.json'

const Applications = (props) => {
    return (
        <div>
            <ul style={{listStyle: 'none', padding: 0}}>
                <li>
                    <ApplicationItem title="工程合同台账管理软件（免费版）" bgColor="white" body="Cubicost provides BIM and AI technology based cost management solutions for construction owners, consultants, main contractors and subcontractors around the world (except the Chinese mainland). Cubicost solutions consist of Cubicost BIM quantity takeoff and cost management solutions with 3 products covering architecture and structure, finishes, MEP, rebar, cost estimation, etc. At present, Cubicost supports quantity takeoff and cost estimation standards and rules in 11 countries and region worldwide." imgSrc={product1Animation} left="true"/>
                </li>
                <li>
                    <ApplicationItem title="工程合同台账管理软件（企业版）" bgColor="rgb(247, 251, 255)" body="Cubicost provides BIM and AI technology based cost management solutions for construction owners, consultants, main contractors and subcontractors around the world (except the Chinese mainland). Cubicost solutions consist of Cubicost BIM quantity takeoff and cost management solutions with 3 products covering architecture and structure, finishes, MEP, rebar, cost estimation, etc. At present, Cubicost supports quantity takeoff and cost estimation standards and rules in 11 countries and region worldwide." imgSrc={product2Animation} left="false"/>
                </li>
                <li>
                    <ApplicationItem title="房企通售楼软件（免费版）" bgColor="white" body="Cubicost provides BIM and AI technology based cost management solutions for construction owners, consultants, main contractors and subcontractors around the world (except the Chinese mainland). Cubicost solutions consist of Cubicost BIM quantity takeoff and cost management solutions with 3 products covering architecture and structure, finishes, MEP, rebar, cost estimation, etc. At present, Cubicost supports quantity takeoff and cost estimation standards and rules in 11 countries and region worldwide." imgSrc={product3Animation} left="true"/>
                </li>
                <li>
                    <ApplicationItem title="房企通售楼软件（企业版）" bgColor="rgb(247, 251, 255)" body="Cubicost provides BIM and AI technology based cost management solutions for construction owners, consultants, main contractors and subcontractors around the world (except the Chinese mainland). Cubicost solutions consist of Cubicost BIM quantity takeoff and cost management solutions with 3 products covering architecture and structure, finishes, MEP, rebar, cost estimation, etc. At present, Cubicost supports quantity takeoff and cost estimation standards and rules in 11 countries and region worldwide." imgSrc={product4Animation} left="false"/>
                </li>
            </ul>
            <BottomSection />
        </div>
    )
}

export default Applications;