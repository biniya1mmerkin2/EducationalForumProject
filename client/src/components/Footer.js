import React from 'react'
import Facebook from '../icons/Facebook-one.png'
import Tweeter from '../icons/Tweeter-now.png'
import Instagram from '../icons/Instagram-now.png'

export default function Footer(){
    return (
        <div className='footer--container'>
            <div className='social--media'>
            <img src={Facebook}
                    className='Facebook--logo'
                    alt='Facebook'
                    />
                    
             <img src={Tweeter}
                    className='Tweeter--logo'
                    alt='Tweeter'
                    />

            <img src={Instagram}
                    className='instagram--logo'
                    alt='instagram'
                    />
            </div>

            <div className='alright'>
                <p>All right reserved</p>
            </div>
            
           
             </div>
    )
}