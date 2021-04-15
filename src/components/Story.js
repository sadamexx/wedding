import React from 'react';
import collage from '../assets/collage.jpg';
import bayahibe from '../assets/bayahibe.png';
import proposal from '../assets/proposal.png';
import Ozo from '../assets/Ozo.png';
import us from '../assets/us.png';
import kids from '../assets/kids.png';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, 
    Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'


const Story = () => {
    const {t, i18n } = useTranslation();


    return(
        <Container fluid={true}>
            <h1 
            className='title' 
            style={{textAlign: 'center'}}>
            {t('story.title')}</h1>

            <img 
            src={collage} 
            alt='picture collage' 
            style={{width: '100%'}} />
            
            <Row style={{paddingTop: '3%'}}>
                <Col style={{paddingTop: '3%'}} sm={{ size: 6, order: 2, offset: 1 }}>
                    <h3 style={{ fontFamily: 'Abel'}}>{t('story.designed')}</h3>
                </Col>
            </Row>

            <Row style={{paddingTop: '3%'}}>
                <Col style={{paddingTop: '3%'}} sm={{ size: 6, order: 2, offset: 6 }}>
                    <h3 style={{ fontFamily: 'Abel'}}>{t('story.hesays')}</h3>
                </Col>
            </Row>

            <Row style={{paddingBottom: '5%'}}>
                    <Col style={{paddingTop: '3%'}}>
                        <img src={bayahibe} alt='bayahibe' style={{width: "100%"}}/>
                    </Col>

                    <Col style={{paddingTop: '3%'}} xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
                        <p style={{paddingTop: '2%'}}>{t('story.beginning')}</p>
                    </Col>                    
                </Row>

            <Row style={{paddingBottom: '5%'}}>
                <Col style={{paddingTop: '3%'}} xs="12" lg="6" className='d-flex align-items-center justify-content-center '>
                    <p style={{paddingTop: '2%'}}>{t('story.proposal')}</p>
                </Col> 
                <Col style={{paddingTop: '3%'}} className='order-first order-lg-last'>
                    <img src={proposal} alt='proposal pic' style={{width: "100%"}} />
                </Col>                                   
            </Row>

            <Container>
               <Row style={{paddingTop: '2%'}}>
               <Col xs="12" s="6" md="4">
            <Card className="card-main" style={{marginTop: '20px'}}>                     
                <CardImg  
                    src={Ozo} 
                    alt='Sarah and Ozo'
                    top width="100%"
                    
                    />
                <CardBody>
                    <CardTitle tag="h5" className="mb-2 text-muted" style={{textAlign: 'center'}}>{t('story.titleHer')}</CardTitle>
                    <CardText>{t('story.she')}</CardText>
                </CardBody> 
            </Card>
            </Col>

            <Col xs="12" s="6" md="4" >
                <Card className="card-main" style={{marginTop: '20px'}}>
                    
                        <CardImg 
                        src={kids}                        
                        alt='Manuel y kids'
                        top width="100%"
                        />
                            <CardBody>
                                <CardTitle 
                                tag="h5" 
                                style={{textAlign: 'center', paddingTop: '10px'}}
                                className="mb-2 text-muted" >
                                {t('story.titleHim')}</CardTitle>
                                <CardText>{t('story.he')}</CardText>
                            </CardBody>

                </Card>
                </Col>

           
            <Col xs="12" s="6" md="4">
                <Card className="card-main" style={{marginTop: '20px'}}>
                
                    <CardImg 
                    src={us} 
                    alt='Sarah y Manuel'
                    top width="100%"                   
                    />
                    <CardBody>
                        <CardTitle 
                        tag="h5" 
                        className="mb-2 text-muted"
                        style={{textAlign: 'center'}}>{t('story.titleThem')}
                        </CardTitle>
                        <CardText>{t('story.aboutHer')}</CardText>
                        <CardText>{t('story.aboutHim')}</CardText>
                    </CardBody> 

                </Card> 
                </Col>  
                </Row>
            </Container>

        </Container>
    );
};

export default Story;