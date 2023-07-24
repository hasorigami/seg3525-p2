import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function StoreNavbar() {

  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState(getLanguageString(i18n.language));
  // var language_str='English';

  

  function getLanguageString(lang) {
    switch (lang) {
      case 'en':
        return 'English';
        break;
      case 'fr':
        return 'Français';
        break;
    }
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(getLanguageString(lng));
  };




  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>{t('navHome')}</Navbar.Brand>
        </LinkContainer>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/about'>
              <Nav.Link>{t('navAbout')}</Nav.Link> 
            </LinkContainer>
            <NavDropdown title={t('navShop')}>

              <LinkContainer to='/instruments'>
                <NavDropdown.Item>Instruments</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/books'>
                <NavDropdown.Item>{t('navBooks')}</NavDropdown.Item>
              </LinkContainer>
  
            </NavDropdown>

          </Nav>
          
          <Nav>
            <NavDropdown title={lang}>
                <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('fr')}>Français</NavDropdown.Item>
            </NavDropdown>

            <LinkContainer to='/cart'>
              <Nav.Link className='d-flex'>Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
              <Button className='d-flex' variant='standard'>{t('navLogin')}</Button>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  );
}

export default StoreNavbar;