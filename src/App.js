import React, { Component } from 'react'

import './legacy.css'

import Nav from './Nav'
import Socials from './Socials'
import Content from './Content'
import Bio from './Bio'
import Publications from './Publications'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Nav />
          <Socials />
        </div>
        <Content>
          <Bio />
          <Publications />
        </Content>
        <Footer />
      </div>
    )
  }
}

export default App
