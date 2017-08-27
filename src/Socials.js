import React from 'react'

const Socials = () => (
  <div className='links'>
    {
      socials.map(social => <Link {...social} />)
    }
  </div>
)

const Link = (props) => (
  <span>
    <a href={props.url}>
      {props.icon}
    </a>
  </span>
)

const regular = (classes) => <i className={classes} />

const goodreads = () => (
  <span className="icon-stack">
    <i className="icon-light">
      <span style={{ fontFamily: 'helvetica'}}>
        g
      </span>
    </i>
  </span>
)

const socials = [{
    url: 'https://twitter.com/josegranjo',
    icon: regular('fa fa-twitter')
  }, {
    url: 'https://github.com/josegranjo',
    icon: regular('fa fa-github')
  }, {
    url: 'https://www.linkedin.com/in/josegranjo',
    icon: regular('fa fa-linkedin')
  }, {
    url: 'https://www.goodreads.com/user/show/13121085-jose-granjo',
    icon: goodreads()
  }, {
    url: 'https://www.instagram.com/josegranjo/',
    icon: regular('fa fa-instagram')
  }, {
    url: 'https://soundcloud.com/athosblade',
    icon: regular('fa fa-soundcloud')
  }, {
    url: 'https://open.spotify.com/user/zeee19',
    icon: regular('fa fa-spotify icon-green')
  }
]

export default Socials
