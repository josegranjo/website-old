import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return (
      <div>
        <div className='rocket' onClick={launch}>
          🚀
        </div>
        <footer>
          <div className='rocket-label link' onClick={launch}>
            Tap the rocket to launch
          </div>
        </footer>
      </div>
    )
  }
}

const launch = () => {
  document.querySelector('.rocket-label').classList.add('transparent')
  setTimeout(function () {
    document.querySelector('.rocket-label').textContent = 'The Sky is not the Limit'
    document.querySelector('.rocket-label').classList.remove('transparent')
    document.querySelector('.rocket-label').classList.remove('link')
  }, 1600)
  setTimeout(function () {
    document.querySelector('.rocket').classList.add('rocket-in-space')
  }, 4000)
}

export default Footer
