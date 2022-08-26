import React from 'react'
import Bell from '../icons/bell.png'
import UserImage from '../user-image/chyn.jpg'
import Logo from '../icons/Weblogo.png'
export default function Header(){

    return(
        <div className='header--container'>
            <div className='nav--container'>
            <div className='Logo--container'>
                <img className='logo'
                     src={Logo}
                     alt='logo'/>
            </div>

            <div className='righter'>
            <nav>
                <ul className='nav--menu'>
                    <li><a href='Home.html'>Home</a></li>
                    <li><a href='Forum.html'>Forum</a></li>
                    <li><a href='About.html'>About</a></li>
                    <li><a href='Site Rules.html'>Site Rules</a></li>
                    <li><a href='Contact.html'>Contact</a></li>
                </ul>
            </nav>
                
                <div className='header--icon'>
                    <img src={Bell} 
                        alt='Bell'
                        width='20px'
                    />
                    <img src={UserImage}
                    className='user--img'
                    alt='user'/>
                </div>
                
                </div>
            </div>
        </div>
    )
}

