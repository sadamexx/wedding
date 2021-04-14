import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';


const Footer = () => {

  const {t, i18n } = useTranslation();

  return (
    <div>
      <Navbar color="light" light expand='sm'>
          <Nav className="mx-auto" navbar>
          <NavItem>
              <NavLink                
                href="/">
                {t('footer.start')}{'  '}
                <FontAwesomeIcon icon='home'/>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink 
                target="_blank" 
                href="https://www.instagram.com/musiclovingirl2011/">
                Sarah's{'   '} 
                <FontAwesomeIcon icon={['fab', 'instagram-square']}/>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink 
                target="_blank" 
                href="https://www.facebook.com/sarah.elias.167">
                Sarah's{'   '}
                <FontAwesomeIcon icon={['fab', 'facebook-square']}/>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                target="_blank" 
                href="https://www.instagram.com/manuelysarahrd">
                Manuel's{'   '} 
                <FontAwesomeIcon icon={['fab', 'instagram-square']}/>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
              target="_blank"
                href="https://www.facebook.com/manuel.suarezgomez.9">
                Manuel's{'   '}
                <FontAwesomeIcon icon={['fab', 'facebook-square']}/>
              </NavLink>
            </NavItem>

            <NavItem>              
              <NavLink href='/contact'>                
              {t('footer.contact')}:{'   '}
                <FontAwesomeIcon icon='envelope'/>       
              </NavLink>
            </NavItem>
            
          </Nav>

      </Navbar>
      <NavbarText className="d-flex justify-content-center">{t('footer.made')}</NavbarText>
    </div>
  );
}

export default Footer;