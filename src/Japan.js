import { h, app } from 'hyperapp'

import img1 from './images/japan19/DSCF1768.jpeg'
import img2 from './images/japan19/IMG_2521.jpeg'

const sections = [
  {
    description: 'Tokyo',
    imgs: [img1, img2] 
  }
]

const Section = ({description, imgs}) => (
  <div>
    <div>{description}</div>
    {imgs.map(url => <img width="1200" src={url} />)}
  </div>
)

export default (state, actions) => (
  <div class="page">
    <h3>
      Japan 2019
    </h3>
    {sections.map(section => <Section {...section} />)} 
  </div>
)
