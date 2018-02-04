import { h, app } from 'hyperapp'

const Socials = () => (
  <div className='socials'>
    {
      socials.map((social, k) => <Link key={`social-${k}`}{...social} />)
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
    url: 'https://www.instagram.com/josegranjo/',
    icon: regular('fa fa-instagram')
  }, {
    url: 'https://github.com/josegranjo',
    icon: regular('fa fa-github')
  }, {
    url: 'https://open.spotify.com/user/zeee19',
    icon: regular('fa fa-spotify icon-green')
  },  {
    url: 'https://soundcloud.com/athosblade',
    icon: regular('fa fa-soundcloud')
  },{
    url: 'https://twitter.com/josegranjo',
    icon: regular('fa fa-twitter')
  }
]

export default Socials
