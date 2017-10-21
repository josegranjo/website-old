import React from 'react'

class Menu extends React.Component {

  constructor () {
    super()
    this.state = {
      clicked: null
    }
  }

  render () {
    const { clicked } = this.state
    const { links, children } = this.props

    const content = clicked === null ? <div></div> : children[clicked]
    const els = links.map((link, k) =>
      <Link
        key={`link-${k}`}
        title={link.title}
        status={clicked === k}
        onClick={() => this.onClick(k)}
      />
    )

    return (
      <div>
        <div style={styles.links}>
          { els }
        </div>
        { content }
      </div>
    )
  }

  onClick (linkNumber) {
    this.setState({ clicked: linkNumber })
  }
}

const Link = ({ title, status, onClick }) => (
  <span
    onClick={onClick}
    style={{...styles.link, ...styles[status ? 'active' : 'inactive']}}
  >
    { title }
  </span>
)

const styles = {
  links: {
    marginBottom: 50,
    position: 'relative'
  },
  link: {
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 700,
    marginRight: 28,
    letterSpacing: 0.6,
    lineHeight: '10px',
    textTransform: 'uppercase',
    verticalAlign: 'top'
  },
  active: {
    color: 'black'
  },
  inactive: {
    color: '#AAA'
  }
}

export default Menu
