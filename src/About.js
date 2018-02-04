import { h, app } from 'hyperapp'
import Publications from './Publications'
import Socials from './Socials'

const About = () => (
  <div className='about'>
    Engineer, Premium Business Strategy @ {` `}
    <a className='green' href='http://spotify.com/'>Spotify</a>
    <br />
    Research for subscriber and revenue growth
    <br /><br />
    Spending my days coding, being active, discovering {` `}
    <a href='https://open.spotify.com/user/zeee19?si=tYOw7ku9RyOyt7WLYaIZsQ'>
     music
    </a>
    , art and {` `}
    <a href='https://www.goodreads.com/user/show/13121085-jose-granjo'>
      reading
    </a>
    , to learn from the greatest minds.
    5000 years of History should have collected some wisdom.
    <br /><br />
    I love my and your delight. I also take it from exploring the world.
    <br />
    {
      // Enjoying doing good, calm, modernism, clean aesthetics, and in believing that
    }
    We can still have a {` `}
    <a href='https://www.youtube.com/watch?v=xsJqPfUHhho'>
      better living
    </a>
    {` `} in it and with ourselves. Nothing is too far out.
    <br /><br />
    Everytime I remember, I follow the {` `}
    <a href='https://www.youtube.com/watch?v=eoOUBETTyMI'>
      Discipline of DE
    </a>

    <Socials />

    —

    <h4>Past</h4>
    <p>
      Background in front-end engineering, educated in Lisbon & Stockholm.
      <br />
      At <a href='http://daresay.co/'>Daresay</a>, I built digital experiences for {` `}
      <a href='https://www.ericsson.com'>Ericsson</a>, {` `}
      <a href='http://www.ikea.com/gb/en/'>Ikea</a>, {` `}
      <a href='https://www.microsoft.com/en-us/microsoftservices/professional-services.aspx'>Microsoft</a>, {` `}
      <br />
      <a href='http://www.sandvik.coromant.com/en-gb/pages/default.aspx'>Sandvik Coromant</a> {` `}
      and {` `}
      <a href='https://www.lexplore.com/'>Lexplore</a>.
      At <a href='https://tecnico.ulisboa.pt/en/'>IST</a>,
      I researched on business model representations for my MSc.
    </p>

    <h4>Publications</h4>
    <p>
      <i>
        Representation and analysis of enterprise models with semantic
        techniques
      </i>
      <br/>
      A. Caetano, J. Pombinho, J. Granjo, M. Bakhshandeh, G. Antunes,
      M, Mira da Silva, J. Borbinha
      <br/>
      in <i>Knowledge and Information Systems</i> Vol. 47-3, Springer
      <br/>
      2016
    </p>
    <p>
      <i>Validating Value Network Business Models by Ontologies</i>
      <br/>
      J. Granjo, J. Pombinho, M. Mira da Silva, A. Caetano and M. Bakhshandeh
      <br/>
      in <i>Proceedings of the Fourth International Symposium on Business
      Modeling and Software Design</i>
      <br/>
      2014
    </p>
  </div>
)

export default About
