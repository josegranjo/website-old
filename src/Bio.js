import React from 'react'

const Bio = () => (
  <div>
    <div className='bio'>
      Engineer at
      <a className='green' href='http://spotify.com/'> Spotify </a>
      in Stockholm.
      <br/>
    </div>

    <h4>Currently</h4>
    <ul>
      <li>
        <a className='green' href='https://www.spotify.com'>Spotify</a> -
        Commercial R&D
      </li>
    </ul>

    <h4>Past</h4>
    <p>
      At <a href='http://daresay.co/'>Daresay</a>, I
      helped organizations create new digital products
      with great experiences.
      <br/>
      I led prototyping and web front-end teams for
      <a href='https://www.ericsson.com'> Ericsson</a>,
      <a href='http://www.ikea.com/gb/en/'> Ikea</a>,
      <br/>
      and together with <a href='https://www.microsoft.com/en-us/microsoftservices/professional-services.aspx'> Microsoft </a> for
      <a href='http://www.sandvik.coromant.com/en-gb/pages/default.aspx'> Sandvik Coromant </a>
      and
      <a href='https://www.lexplore.com/'> Lexplore</a>.
    </p>
    <p>
      At <a href='https://tecnico.ulisboa.pt/en/'>IST</a>,
      I researched on business model representation with ontologies for my MSc.
    </p>
  </div>
)

export default Bio
