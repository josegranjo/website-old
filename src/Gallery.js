import React from 'react'

import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'

const images = [
  img3,
  // img1,
  // img2
]

const Gallery = () => {

  const isPhone = () => window.innerWidth <= 450
  const width = isPhone() ? '100%' : '76%'

  return (
    <div style={isPhone() ? styles.phoneGallery : {}}>
      {images.map(img => <img src={img} width={width} />)}
    </div>
  )
}

const styles = {
  phoneGallery: {
    margin: '12px auto 20px auto'
  }
}

export default Gallery
