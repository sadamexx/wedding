import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {t, i18n } = useTranslation();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className='brand' href="/">Sarah & Manuel</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/story">{t('nav.story')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/wedding">{t('nav.wedding')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/location">{t('nav.location')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/registry">{t('nav.registry')}</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              🇺🇸/🇩🇴
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => props.handleClick('en')}>
                English 🇺🇸
                </DropdownItem>
                <DropdownItem onClick={() => props.handleClick('es')}>
                Español 🇩🇴
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;