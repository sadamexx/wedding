import react from 'react';
import quote_bkgrnd from '../assets/quote_bkgrnd.png';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import masks from '../assets/masks.png';
import meson from '../assets/meson.png';
import wedding from '../assets/wedding.jpg';


const Wedding = () => {
    const {t, i18n } = useTranslation();


    return(
        <div>
        <Container fluid={true} 
        className='themed-container' 
        >
            <h1 className='title' style={{textAlign: 'center'}}>{t('wedding.title')}</h1>
            <Row  className='wedd'>
                <Col sm='6' lg='7' className="offset-lg-4" 
                style={{paddingTop: '3%'}}>
                    <h3 style={{
                        textAlign: 'center', 
                        textSpacing: '1.1', 
                        textShadow: '2px 2px 30px #e4bad4',
                        }}>{t('wedding.scripture')}</h3>
                </Col>
                <Col sm='6' lg='7' className="offset-lg-4">
                <h1 
                style={{
                    textAlign: 'center',
                    textSpacing: '1.1', 
                    textShadow: '2px 2px 10px white',
                     }}>{t('wedding.time')}</h1>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row style={{paddingTop: '2%', paddingBottom: '5%'}}>
                        <Col>
                            <img src={meson} style={{width: "100%"}}/>
                        </Col>
                        <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
                            <p style={{paddingTop: '2%'}} >{t('wedding.venue')}</p>
                        </Col>                    
            </Row>

                <Row style={{paddingBottom: '5%'}}>
                    <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
                    <p style={{paddingTop: '2%'}}>{t('wedding.covid')}</p>
                    </Col>
                    <Col >
                        <img src={masks} style={{width: "100%"}}/>
                    </Col>
                </Row>

                <Row style={{paddingBottom: '5%'}}>
                <Col >
                        <img src={wedding} style={{width: "100%"}}/>
                    </Col>
                    <Col xs="12" lg="6" className='d-flex align-items-center justify-content-center'>
                    <a style={{textDecoration: 'none', textDecorationColor: 'black'}} target='_blank' href=''>
                    <p style={{paddingTop: '2%'}}>{t('wedding.date')}</p>
                    </a>
                    </Col>
                    
                </Row>   


        </Container>
        </div>
    );
};

export default Wedding;