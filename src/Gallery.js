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
  const width = isPhone() ? '100%' : '80%'

  return (
    <div style={isPhone() ? styles.phoneGallery : {}}>
      {images.map((img, k) => <img key={`img-${k}`}src={img} width={width} />)}
    </div>
  )
}

const styles = {
  phoneGallery: {
    marginBottom: 20
  }
}

export default Gallery
