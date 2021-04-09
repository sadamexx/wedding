import react from 'react';
import { useTranslation } from 'react-i18next';
import { UncontrolledCarousel } from 'reactstrap';
import mountain from '../assets/mountain2.png';
import beach from '../assets/beach.png';
import colon from '../assets/colon.jpg';
import market from '../assets/market.png';
import plants from '../assets/plants.png';
import cave from '../assets/cave.png';
import juan_dolio from '../assets/juan_dolio.png';
import flag from '../assets/flag.png';
import malecon from '../assets/malecon.png';
import dancing from '../assets/dancing.png';
import {Container, Row, Col} from 'reactstrap';

const items = [
    {
      src: beach,
      key: '1'
    },
    {
      src: colon,
      key: '2'
    },
    {
      src: mountain,
      key: '3'
    },    
    {
      src: market,
      key: '4'
    },
    {
      src: plants,
      key: '5'
    },
    {
      src: juan_dolio,
      key: '5'
    },
    {
      src: cave,
      key: '6'
    }
  ];
const Location = () => {
    const {t, i18n } = useTranslation();



    return(
       <div  >
       <h1 className='title' style={{textAlign: 'center'}}>Dominican Republic</h1>
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
                    <Col >
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