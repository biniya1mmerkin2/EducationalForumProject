import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';
function Navbar() {
    
    const [ click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    

    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      window.addEventListener('resize', showButton);

      useEffect(() => {
        showButton();
      }, []);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                EDUCATIONAL FORUM    <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu '}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/forum' className='nav-links' onClick={closeMobileMenu}>
                        forum
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        about
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/site-rules' className='nav-links' onClick={closeMobileMenu}>
                        site rules
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        contact
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to='/members' className='nav-links' onClick={closeMobileMenu}>
                        members
                    </Link>
                    
                </li>
            </ul>
            { button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar