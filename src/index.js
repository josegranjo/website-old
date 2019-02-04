import {h, app} from 'hyperapp'
import './index.css'

import Header from './Header'
import About from './About'
// import MusicGallery from './MusicGallery'

import me from './images/me.jpg'
import clip from './clip.wav'
// import greyTracks from './data/grey-tracks'

const state = {
  visible: true,
  // greyTracks,
  whyNotEnabled: false
}

const actions = {
  floatAway: () => state => ({visible: (state.visible = false)}),
  changeWhyNot: () => state => ({whyNotEnabled: true})
}

const Columns = ({}, children) => <div className="columns">{children}</div>

const Footer = ({onClick}) => (
  <footer onclick={onClick}>
    <div>ふわっと</div>
    <audio id="audioclip" src={clip} preload="auto" style={{display: 'none'}} />
  </footer>
)

const Img = () => (
  <div styles={{display: 'block'}}>
    <img
      src={me}
      alt="me"
      width={window.innerWidth <= 440 ? window.innerWidth : 440}
    />
  </div>
)

const Application = ({
  visible, 
  // greyTracks, 
  // whyNotEnabled, 
  floatAway, 
  // changeWhyNot
}) => {
  
  if (!visible) {
    // setTimeout(window.close, 2000)
    document.getElementById('audioclip').play()
  }

  const homepage = (
    <div className={visible ? 'app' : 'app invisible'}>
      {window.innerWidth <= 440 ? <Img /> : ''}
      <Header />
      <Columns>
        <About />
        {window.innerWidth > 440 ? <Img /> : ''}
      </Columns>
      <Footer onClick={floatAway} />
    </div>
  )

  // const grey = (
  //   <MusicGallery 
  //     tracks={greyTracks}
  //     whyNotEnabled={whyNotEnabled}
  //     changeWhyNot={changeWhyNot}
  //   />
  // ) 

  const urlParams = new URLSearchParams(window.location.search)

  if(urlParams.has('route')) {
    switch(urlParams.get('route')) {
      // case 'grey': return grey
      default: return homepage
    }
  }

  switch(window.location.pathname) {
    // case '/grey': return grey
    default: return homepage
  }
}

const view = (state, actions) => <Application {...state} {...actions} />

const main = app(state, actions, view, document.getElementById('root'))

window.state = state
