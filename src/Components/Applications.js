import React from 'react';
import FNavBar from './FNavBar';
import ApplicationItem from './ApplicationItem';
import appBg1 from '../Assets/appBg1.jpeg'
import appBg2 from '../Assets/appBg2.png'
import appBg3 from '../Assets/appBg3.png'
import appBg4 from '../Assets/appBg4.png'
import BottomSection from './BottomSection';

const Applications = (props) => {
    return (
        <div>
            <FNavBar />
            <ul style={{listStyle: 'none', padding: 0}}>
                <li>
                    <ApplicationItem title="工程合同台账管理软件（免费版）" bgColor="white" body="Cubicost provides BIM and AI technology based cost management solutions for construction owners, consultants, main contractors and subcontractors around the world (except the Chinese mainland). Cubicost solutions consist of Cubicost BIM quantity takeoff and cost management solutions with 3 products covering architecture and structure, finishes, MEP, rebar, cost estimation, etc. At present, Cubicost supports quantity takeoff and cost estimation standards and rules in 11 countries and region worldwide." imgSrc={appBg1} left="true"/>
                </li>
                <li>
                    <ApplicationItem title="工程合同台账管理软件（企业版）" bgColor="rgb(247, 251, 255)" body="Cubicost provides BIM and AI technology based cost management solutions for construction owners, consultants, main contractors and subcontractors around the world (except the Chinese mainland). Cubicost solutions consist of Cubicost BIM quantity takeoff and cost management solutions with 3 products covering architecture and structure, finishes, MEP, rebar, cost estimation, etc. At present, Cubicost supports quantity takeoff and cost estimation standards and rules in 11 countries and region worldwide." imgSrc={appBg2} left="false"/>
                </li>
                <li>
                    <ApplicationItem title="房企通售楼软件（免费版）" bgColor="white" body="Cubicost provides BIM and AI technology based cost management solutions for construction owners, consultants, main contractors and subcontractors around the world (except the Chinese mainland). Cubicost solutions consist of Cubicost BIM quantity takeoff and cost management solutions with 3 products covering architecture and structure, finishes, MEP, rebar, cost estimation, etc. At present, Cubicost supports quantity takeoff and cost estimation standards and rules in 11 countries and region worldwide." imgSrc={appBg3} left="true"/>
                </li>
                <li>
                    <ApplicationItem title="房企通售楼软件（企业版）" bgColor="rgb(247, 251, 255)" body="Cubicost provides BIM and AI technology based cost management solutions for construction owners, consultants, main contractors and subcontractors around the world (except the Chinese mainland). Cubicost solutions consist of Cubicost BIM quantity takeoff and cost management solutions with 3 products covering architecture and structure, finishes, MEP, rebar, cost estimation, etc. At present, Cubicost supports quantity takeoff and cost estimation standards and rules in 11 countries and region worldwide." imgSrc={appBg4} left="false"/>
                </li>
            </ul>
            <BottomSection />
        </div>
    )
}

export default Applications;