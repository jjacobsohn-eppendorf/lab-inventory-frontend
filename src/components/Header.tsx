import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="text-bg-dark">
      <LinkContainer to="/">
        <Navbar.Brand className='d-flex text-white'>
          <span style={{ 'display': 'inline-block', 'margin': '0 12px' }}>
            <Logo />
          </span>
          Lab Inventory Tracker
        </Navbar.Brand>
      </LinkContainer>
      <Button variant='link' className='text-white ms-auto'>Login</Button>
    </Navbar >
  );
}

export default Header;