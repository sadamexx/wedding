import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import tropical from '../assets/tropical.jpg';
import wedding640 from '../assets/wedding640.png';
import location from '../assets/location.png';
import gifts from '../assets/gifts640.png';
import couple from '../assets/couple.png';


const Hero = () => {
    const {t, i18n } = useTranslation();

  return (
      <Container fluid={true} className='themed-container heroContainer'>
        <Row className='nameCol'>
          <Col xs='12' s={{ size: 'auto', offset: 1 }}  lg='4' >
              <h1  className='heroName'>Sarah & Manuel</h1>
              <br/>
              <p style={{color: 'white', fontWeight: '400'}}>{t('hero.tag')}</p>
            </Col>
          <Col xs='12' s="6"  lg='8'  >
          <img src={tropical} style={{width: '100%'}}/>
          </Col>         
        </Row>

        <Container style={{paddingTop: '5%'}}>
        <Link to='/story' style={{textDecoration: 'none'}}>
                <Row style={{paddingTop: '2%', paddingBottom: '5%'}}>                  
                    <Col >
                        <img src={couple} style={{width: "100%"}}/>
                    </Col>
                    <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center order-first order-lg-last'>
                        <p className='clickems' style={{paddingTop: '2%'}} >{t('nav.story')}</p>
                    </Col>
               </Row>
               </Link>


               <Link to='/wedding' style={{textDecoration: 'none'}}>
                <Row style={{paddingBottom: '5%'}}>
                    <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
                        <p className='clickems' style={{paddingTop: '2%'}}>{t('nav.wedding')}</p>
                    </Col>

                    <Col >
                        <img src={wedding640} style={{width: "100%"}}/>
                    </Col>
                </Row>    
              </Link>

              <Link to='/location' style={{textDecoration: 'none'}}>
                <Row style={{paddingTop: '2%', paddingBottom: '5%'}}>
                    <Col >
                        <img src={location} style={{width: "100%"}}/>
                    </Col>

                    <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center  order-first order-lg-last'>
                        <p className='clickems' style={{paddingTop: '2%'}}>{t('nav.location')}</p>
                    </Col> 
                </Row> 
                </Link>

                <Link to='/registry'  style={{ textDecoration: 'none'}}>
                <Row  style={{paddingBottom: '5%'}}>
                    <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
                        <p className='clickems' style={{paddingTop: '2%'}}>{t('nav.registry')}</p>
                    </Col>

                    <Col >
                        <img src={gifts} style={{width: "100%"}}/>
                    </Col>
                </Row>
                </Link> 
            </Container>
      </Container>
   
  );
};

export default Hero;