import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import tropical from '../assets/tropical.jpg';
import smiles2 from '../assets/smiles2.jpg';


const Hero = () => {
    const {t, i18n } = useTranslation();

  return (
      <Container fluid={true} className='themed-container heroContainer'>
        <Row>
        <Col xs='12' s="6" lg='6' >
            <h1  className='heroName'>Sarah & Manuel</h1>
            <br/>
            <p style={{color: 'white', fontWeight: '600'}}>{t('hero.tag')}</p>
          </Col>
        <Col xs='12' s="6" md="12" className=' d-lg-none d-xl-none' >
        <img src={tropical} style={{width: '100%'}}/>
        </Col>
         
        </Row>
        {/* <Container>
          <Row>
            <Col className="rowina">
            <img src={smiles2} style={{width: "100%"}}/>
            </Col>
            
            <Col className="rowina" md='4' >
            <h2>
              Our Story
            </h2>
            </Col>
          </Row>

        </Container> */}
      </Container>
   
  );
};

export default Hero;