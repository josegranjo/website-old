import { h, app } from 'hyperapp'
import './index.css';

import Header from './Header'
import About from './About'

import me from './images/me.jpg'
import clip from './clip.wav'

const state = {
  visible: true
}

const actions = {
  floatAway: () => state => ({ visible: state.visible = false })
}

const Columns = ({}, children) => (
  <div className='columns'>
    {children}
  </div>
)

const Footer = ({ onClick }) => (
  <footer onclick={onClick} >
    <div>
      ふわっと
    </div>
    <audio id='audioclip' src={clip} preload='auto' style={{display: 'none'}} />
  </footer>
)

const Img = () => (
  <div styles={{display: 'block'}}>
    <img src={me} alt='me' width={window.innerWidth <= 440 ? window.innerWidth : 440} />
  </div>
)

const Application = ({ visible, floatAway }) => {
  if (!visible) {
    // setTimeout(window.close, 2000)
    document.getElementById('audioclip').play()
  }

  return (
    <div className={visible ? 'app' : 'app invisible'}>
      { window.innerWidth <= 440 ? <Img /> : '' }
      <Header />
      <Columns>
        <About />
        { window.innerWidth > 440 ? <Img /> : '' }
      </Columns>
      <Footer onClick={floatAway} />
    </div>
  )
}

const view = (state, actions) => (
  <Application
    {...state}
    {...actions}
  />
)

const main = app(state, actions, view, document.getElementById('root'))

window.state = state
