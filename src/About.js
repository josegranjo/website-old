import { h, app } from 'hyperapp'
import Socials from './Socials'

const About = () => (
  <div className='about'>
    <div>
      <a href="/bookshelf">Bookshelf</a><br/>
      {/* <a href="/grey">Grey Gallery</a><br/> */}
      <a href="/work">Work</a><br/>
      <a href="/publications">Publications</a>
    </div>

    <Socials />

    Engineer @{` `} 
    <a className='green' href='http://spotify.com/'>Spotify</a> Premium Business Strategy  
    
    <br /><br />
    Spending my days coding, being active, exploring the world, discovering {` `}
    <a href='https://open.spotify.com/user/zeee19?si=tYOw7ku9RyOyt7WLYaIZsQ'>
     music
    </a>
    , art, {` `}
    <a href='/bookshelf'>
      reading
    </a>
    , learning wisdom collected in 5000 years of History.
    <br /><br />
    {
      // Enjoying doing good, calm, modernism, clean aesthetics, and in believing that
    }
    We can still have a {` `}
    <a href='https://www.youtube.com/watch?v=xsJqPfUHhho'>
      better living
    </a>
    {` `} in it and with ourselves. Nothing is too far out.
    <br />
    Everytime I remember, I follow the {` `}
    <a href='https://www.youtube.com/watch?v=eoOUBETTyMI'>
      Discipline of DE
    </a>
    <br /><br /><br />
    <br />
    
    

  </div>
)

export default About
