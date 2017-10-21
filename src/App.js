import React, { Component } from 'react'

import './legacy.css'

import Nav from './Nav'
import Socials from './Socials'
import Content from './Content'
import Bio from './Bio'
import Publications from './Publications'
import Footer from './Footer'
import Sides from './Sides'
import Gallery from './Gallery'
import Menu from './Menu'

const LINKS = [
  { id: 'who', title: 'WHO?' },
  { id: 'what', title: 'WHAT?' },
  { id: 'where', title: 'WHERE?' },
  // { id: 'when', title: 'WHEN?' },
  // { id: '', title: 'WHY?' }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sides>
          <Menu links={LINKS}>
            <Who />
            <What />
            <Where />
          </Menu>
          <Gallery />
        </Sides>
        <Footer />
      </div>
    )
  }
}

const Who = () =>
  <Content>
    Engineer for Commercial Products Offering @
    <a className='green' href='http://spotify.com/'> Spotify</a>
    <br/>
    Stockholm
    <br />
    <br />
    Background in front-end engineering
    <br/>
    Educated in Lisbon & Stockholm
    <br/>
    <br/>
    —
    <br/>
    <br/>
    I enjoy
    <br/>
    - Working with positive people
    <br/>
    - Being active
    <br/>
    - Music made with machines, post-punk, athmospheric and ethereal sounds
    <br/>
    - Clean aesthetics, minimalism
    <br/>
    - Learn about the world
    <br/>
    - Never stop exploring
    <br/>
    - Utopian future
  </Content>

const What = () => (
  <Content>
    <Bio />
    <Publications />
  </Content>
)
const Where = () => <Content><Socials /></Content>
const When = () => <Content>From here to eternity</Content>

const Lel = () => (
  <div>
    <div className="header">
      <Nav />
      {
        // <Socials />
      }
    </div>
    <Content>
      <Bio />
      <Publications />
    </Content>
    <Footer />
  </div>
)



export default App
