import React from 'react';
import { useTranslation } from 'react-i18next';
import { UncontrolledCarousel } from 'reactstrap';

import flag from '../assets/flag.png';
import malecon from '../assets/malecon.png';
import dancing from '../assets/dancing.png';


import beach1040 from '../assets/1040beach.png';
import market1040 from '../assets/1040market.png';
import puntaCana1040 from '../assets/1040puntaCana.png';
import cave1040 from '../assets/1040cave.png';
import temple1040 from '../assets/1040temple.png';
import mountain1040 from '../assets/1040mountain.png';
import fortress1040 from '../assets/1040fortress.png';
import colon1040 from '../assets/1040colon.png';
import boats1040 from '../assets/1040boats.png';
import calle1040  from '../assets/1040calle.png';
import {Container, Row, Col} from 'reactstrap';

const items = [
  {
    src: puntaCana1040,
    key: '1'
  },
  {
    src: colon1040,
    key: '2'
  },
  {
    src: market1040,
    key: '3'
  },
  {
    src: temple1040,
    key: '4'
  },
  {
    src: cave1040,
    key: '5'
  },
  {
    src: fortress1040,
    key: '6'
  },
  {
    src: boats1040,
    key: '7'
  },
  {
    src: mountain1040,
    key: '8'
  },
  {
    src: beach1040,
    key: '9'
  },
  {
    src: calle1040,
    key: '10'
  }
      
  ];
const Location = () => {

  const {t, i18n } = useTranslation();



  return(
      <div  >
        <h1 
        className='title' 
        style={{textAlign: 'center'}}>Dominican Republic</h1>

        <UncontrolledCarousel items={items} />

        <Container style={{padding: '3% 10%'}}>
          <Row style={{paddingTop: '2%', paddingBottom: '5%'}}>
            <Col>
                <img src={flag} style={{width: "100%"}}/>
            </Col>

            <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
                <p style={{paddingTop: '2%'}} >{t('location.wiki')}</p>
            </Col>                    
          </Row>

          <Row style={{paddingBottom: '5%'}}>
            <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
              <p style={{paddingTop: '2%'}}>{t('location.diverse')}</p>
            </Col>

            <Col className='order-first order-lg-last'>
                <img src={malecon} style={{width: "100%"}}/>
            </Col>
          </Row>    

          <Row style={{paddingTop: '2%', paddingBottom: '5%'}}>
            <Col>
              <img src={dancing} style={{width: "100%"}}/>
            </Col>

            <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
              <p style={{paddingTop: '2%'}}>{t('location.music')}</p>
            </Col> 
          </Row>  
        </Container>  
      </div>
    );
};

export default Location;