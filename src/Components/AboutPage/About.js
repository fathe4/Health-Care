import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './about.css'
import healthCare from '../../images/healthcare.jpg'
import BreadCrumb from '../Breadcrumb/Breadcrumb';

const About = () => {
    return (
        <>
            <BreadCrumb text='About Us' img="https://closler.org/wp-content/uploads/2018/08/teamwork-hands.png"></BreadCrumb>
            <div className='about '>

                <Container>
                    <Row xs={1} md={2} className='d-flex justify-content-center align-items-center'>
                        <Col>
                            <h2 className='about-title'>About <i className='primary-color my-5 fw-bolder '>Health</i> care</h2>
                            <h5 className='my-3 fw-bold'>We thrive on building a healthy and solid community for all individuals.</h5>
                            <p className='mt-4 lh-lg'>Our institute provides care for our region’s most precious resource: human. We care for the growing needs of our community. We build systems for providing health services for individuals, families, communities and populations in general, and not just patients.  WE provided best Home care service with many facilities, we are the trust worthy platform. Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. This includes, but is not limited to, your work and home stressors. We will fax the requested records directly to the Qualified Doctors day before or on the appointment day. Once the family has reached a decision, the team informs the relevant parties so final arrangements can begin. Emergency staff who are available 24 hours a day, seven days a week. These staff members are trained professionals
                            </p>
                        </Col>
                        <Col >
                            <img width='750' className='mt-5 shadow about-img' src={healthCare} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;