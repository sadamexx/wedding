import React from 'react';
import venmo from '../assets/venmo_sized.jpg';
import paypal from '../assets/paypal_sized.jpg';
import cash_sized from '../assets/cash_sized.jpg';
import plane from '../assets/plane.jpg';
import kitchen from '../assets/kitchen.jpg';
import heart from '../assets/heart.png';
import { useTranslation } from 'react-i18next';
import {  Container, Col, Row, Card, CardImg, CardBody,
    CardTitle, } from 'reactstrap';


const Registry = () => {
    const {t, i18n } = useTranslation();

    return(
        <div style={{padding: '2% 5%'}}>
            <div>
                <h1 
                className='title' 
                style={{textAlign: 'center'}}>{t('registry.title')}</h1>
            </div>
            <Container>
                <Row style={{paddingTop: '2%', paddingBottom: '5%'}}>
                    <Col>
                        <img src={plane} alt='plane' style={{width: "100%"}}/>
                    </Col>

                    <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
                        <p style={{paddingTop: '2%'}} >{t('registry.summary')}</p>
                    </Col>                    
               </Row>

                <Row style={{paddingBottom: '5%'}}>
                    <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
                        <p style={{paddingTop: '2%'}}>{t('registry.explain')}</p>
                    </Col>

                    <Col className='order-first order-lg-last'>
                        <img src={kitchen} alt='kitchen' style={{width: "100%"}}/>
                    </Col>
                </Row>    

                    
                <Row style={{paddingTop: '2%', paddingBottom: '5%'}}>
                    <Col>
                        <img src={heart} alt='heart made from hands' style={{width: "100%"}}/>
                    </Col>

                    <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
                        <p style={{paddingTop: '2%'}}>{t('registry.thankful')}</p>
                    </Col> 
                </Row>  
            </Container>            
            
            <Container>
                <Row style={{paddingTop: '2%'}}>
                    <Col xs="12" s="6" md="4">
                        <Card className="card-main" style={{marginTop: '20px'}}>
                            <a target='_blank' rel="noreferrer" href='https://cash.app/$sarahymanuelrd'>                          
                                <CardImg  
                                    src={cash_sized} 
                                    alt='cashapp'
                                    top width="100%"
                                    
                                    />
                                    <CardBody>
                                        <CardTitle 
                                        tag="h5" 
                                        className="mb-2 text-muted" 
                                        style={{textAlign: 'center'}}>CashApp: $sarahymanuelrd</CardTitle>
                                    </CardBody> 
                                </a>
                        </Card>
                    </Col>

                <Col xs="12" s="6" md="4">
                    <Card className="card-main" style={{marginTop: '20px'}}>
                        <a target='_blank' rel="noreferrer" href='https://paypal.me/sadamexx209'>
                            <CardImg 
                            src={paypal}                        
                            alt='paypal'
                            top width="100%"
                            />
                                <CardBody >
                                    <CardTitle
                                    tag="h5" 
                                    style={{textAlign: 'center', paddingTop: '10px'}}
                                    className="mb-2 text-muted">
                                    PayPal: @sadamexx209</CardTitle>
                                </CardBody>
                        </a>
                    </Card>
                </Col>
            
                <Col xs="12" s="6" md="4">
                    <Card className="card-main" style={{marginTop: '20px'}}>
                    <a target='_blank' rel="noreferrer" href='https://venmo.com/code?user_id=1938767657041920298'>
                        <CardImg 
                        src={venmo} 
                        alt='venmo'
                        top width="100%"               
                        />
                            <CardBody>
                                <CardTitle 
                                tag="h5" 
                                className="mb-2 text-muted"
                                style={{textAlign: 'center'}}>Venmo: @Sarah-Elias-5
                                </CardTitle>
                            </CardBody> 
                        </a>
                    </Card> 
                    </Col>  
                </Row>
            </Container>
        </div>
    );
};

export default Registry;