import React, {Component} from 'react'
import './css/Card.css'
import './css/bootstrap.min.css'
import PropTypes from 'prop-types'

export default class BaseCard extends Component {
  constructor () {
    super()
    this.state = {
      raised: ''
    }
  }

  lowerCard () {
    this.setState({
      raised: ''
    })
  }

  raiseCard () {
    this.setState({
      raised: 'card-raised'
    })
  }

  renderHeader () {
    const header = this.props.header
    if (header != null) {
      const imgAndTitle = (<div className='row header'>
        <div className='col-xs-2'>
          <img src={header.image || null} className='header-img' alt='test' />
        </div>
        <div className='col-xs-10 no-padding header-title'>
          <h3 className='no-margin'>{header.title || null}</h3>
          <h4 className='no-margin subtitle'>{header.subtitle || null}</h4>
        </div>
      </div>)

      const imageOnly = (
        <div className='col-xs-2'>
          <img src={header.image || null} className='header-img' alt='test' />
        </div>
    )

      const titleOnly = (
        <div className='col-xs-10 pull-left no-padding'>
          <h3 className='no-margin'>{header.title}</h3>
          <h4 className='no-margin subtitle'>{header.subtitle || null}</h4>
        </div>
    )

      if (header.title != null && header.image != null) {
        return imgAndTitle
      }

      if (header.title == null && header.image != null) {
        return imageOnly
      }

      if (header.title != null && header.image == null) {
        return titleOnly
      }
    } else {
      return null
    }
  }

  mediaRender () {

  }

  contentRender () {
    return this.props.children
  }

  buttonRender () {
    const btn = this.props.buttons
    if (btn != null && btn.length > 0) {
      const width = (this.props.verticalButtons ? 12 : (12 / btn.length))
      return this.props.buttons.map((b, i) => <div key={i} className={'no-padding col-xs-' + width}>{b}</div>)
    } else {
      return null
    }
  }

  render () {
    return <div className={'col-xs-12 card ' + this.state.raised}
      onMouseLeave={this.lowerCard.bind(this)}
      onMouseEnter={this.raiseCard.bind(this)}
      style={{ display: (this.props.visible === true ? 'none' : ''), marginTop: '0px', marginBottom: '20px', padding: '0px' }}>

      <div className='header'>
        {this.renderHeader()}
      </div>
      <div>
        {this.mediaRender()}
      </div>
      <div className='col-xs-12'>
        {this.contentRender()}
      </div>
      <div className='footer no-padding'>
        {this.buttonRender()}
      </div>
    </div>
  }
}

BaseCard.PropTypes = {
  header: PropTypes.object
}
