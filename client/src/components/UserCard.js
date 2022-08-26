import React from 'react'

export default function UserCard(props){

    return(
        <div id='usercard--container'>
        <div className='option'>
            <div className='point1'></div>
            <div className='point2'></div>
            <div className='point3'></div>
        </div>
            <img src={props.img}
            alt='userimage'
            width='150px'
            height='150px'
            className='users'
            />
            <h3 className='Usersname'>{props.name}</h3>
            <h5>{props.role}</h5>
        <div className='follower-status'>

            <div className='follow-status'>
                <div className='separator1'>
                  <span>{props.followersnumber}</span>
                  <span>{props.followers}</span>
                </div>
        
                <div className='separator2'>
                <span>{props.followingnumber}</span>
                  <span>{props.following}</span>
                </div>

            </div>
                
                
            </div>
            <div id='buttons'>
            <button id='follow-btn'>Follow</button>
            <button id='message-btn'><i class="fa-solid fa-message"></i></button>
            </div>
            
        </div>
    )
}