import React from 'react';
import { useTranslation } from 'react-i18next';
import { UncontrolledCarousel } from 'reactstrap';

import flag from '../assets/flag.png';
import malecon from '../assets/malecon.png';
import dancing from '../assets/dancing.png';

import beach640 from '../assets/640beach.png';
import market640 from '../assets/640market.png';
import puntaCana640 from '../assets/640puntaCana.png';
import cave640 from '../assets/640cave.png';
import temple640 from '../assets/640temple.png';
import mountain640 from '../assets/640mountain.png';
import fortress640 from '../assets/640fortress.png';
import colon640 from '../assets/640colon.png';
import boats640 from '../assets/640boats.png';
import calle640  from '../assets/640calle.png';
import {Container, Row, Col} from 'reactstrap';

const items = [
  {
    src: puntaCana640,
    key: '1'
  },
  {
    src: colon640,
    key: '2'
  },
  {
    src: market640,
    key: '3'
  },
  {
    src: temple640,
    key: '4'
  },
  {
    src: cave640,
    key: '5'
  },
  {
    src: fortress640,
    key: '6'
  },
  {
    src: boats640,
    key: '7'
  },
  {
    src: mountain640,
    key: '8'
  },
  {
    src: beach640,
    key: '9'
  },
  {
    src: calle640,
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
                <img src={flag} alt='dominican flag' style={{width: "100%"}}/>
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
                <img src={malecon} alt='colonial bldg' style={{width: "100%"}}/>
            </Col>
          </Row>    

          <Row style={{paddingTop: '2%', paddingBottom: '5%'}}>
            <Col>
              <img src={dancing} alt='people dancing' style={{width: "100%"}}/>
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