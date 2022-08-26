import React from 'react'
import Grid from '../icons/gridview.png'
import List from '../icons/listview.png'
import Search from '../icons/search.png'
import UserCard from './UserCard'
import Chyn from '../user-image/chyn.jpg'
import Roger from '../user-image/roger.jpg'
import Smith from '../user-image/smith.jpg'
import Julia from '../user-image/julia.jpg'
import Simon from '../user-image/simon.jpg'

export default function Body(){

    return (
        <div className='body--container'>
            <section className='body--header'>
                 <div className='header--left'>
                 <div>
                    <select type='dropdown' className='member--dropdown' id='color'>
                        <option value='All-members'>All-members</option>
                        <option value='black'>Admins</option>
                        <option value='Moderators'>Moderators</option>
                    </select>
                 </div>
                    
                    <div>
                         <label>
                            Sort by:
                            <select type='dropdown' className='sortby--dropdown'>
                                <option value='Default'>Default</option>
                                <option value='No._of_followers'>No. of followers</option>
                                <option value='Newest_to_old'>Newest to old</option>
                                <option value='Oldest_to_new'>Oldest to new</option>
                                <option value='No. of forums posted'>No. of forums posted</option>
                            </select>
                        </label>

                    </div>
                   
                     
                </div>
                

            <div className='header--right'>
                <img src={Grid} 
                id='grid'
                        alt='gridview'
                        width='20px'
                        title='Grid-view'
                        onClick={Gridview}
                    />

                    <img src={List} 
                    id='list'
                        alt='listview'
                        width='20px'
                        title='List-view'
                        onClick={Listview}
                    />
                    
                    <div className='join-icon'>
                       
                         <form className='icons' action='' target='blank'>
                                 <img src={Search} alt='search' width='20px'/>
                                 <input type='text' className='searchbox' placeholder='Find a member' color='white'/>
                         </form>
                   
                    </div>
                    
           
            </div>
                    
        </section>
            
            <section id='flex-box-container'>
              
            <UserCard
             img={Chyn}
              name='Chyn guang'
              role='admin'
              followersnumber='12'
              followingnumber='13'
              followers='Followers'
              following='Following'
             />
             <UserCard
             img={Roger}
              name='Roger Blue'
              role='admin'
              followersnumber='11'
              followingnumber='12'
              followers='Followers'
              following='Following'
             />
             <UserCard
             img={Smith}
              name='Smith Dikson'
              role='admin'
              followersnumber='9'
              followingnumber='10'
              followers='Followers'
              following='Following'
             />

<UserCard
              img={Julia}
              name='Julia Brad'
              role='admin'
              followersnumber='12'
              followingnumber='13'
              followers='Followers'
              following='Following'
             />
             <UserCard
             img={Simon}
              name='Simon douge'
              role='admin'
              followersnumber='11'
              followingnumber='12'
              followers='Followers'
              following='Following'
             />
            </section>

        </div>
    )

    function Listview(){

        document.getElementById('flex-box-container').style.flexDirection='column';
        document.getElementById('list').style.border='2px solid orange'
        document.getElementById('list').style.padding='3px'
        document.getElementById('grid').style.border='0px'
            
        
    }
    
    function Gridview(){
    
        document.getElementById('flex-box-container').style.flexDirection='row';
        document.getElementById('grid').style.border='2px solid orange'
        document.getElementById('grid').style.padding='3px'
        document.getElementById('list').style.border='0px'
        
        document.getElementById('usercard--container').style.flexDirection='column'
        document.getElementById('usercard--container').style.width='250px';
        document.getElementById('follow-btn').style.width='70%';
        document.getElementById('buttons').style.width='100%';
    }
    
}

