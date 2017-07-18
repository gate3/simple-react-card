import React, {Component} from 'react'
import {render} from 'react-dom'
import '../../src/css/bootstrap.min.css'
import { BaseCard, MediaCard } from '../../src'

class Demo extends Component {
  render () {
    const header = {image: 'http://localhost/img/avatar2.jpg',
      title: 'Doyin Olarewaju',
      subtitle: 'Most awesome'
    }

    const media = {
      image: header.image,
      title: 'Title',
      subtitle: 'Just a test'
    }

    const bigMedia = Object.assign({mediaStyle: {height: '300px'}}, media)

    const button = [
      <button className='btn btn-block btn-success'>test</button>,
      <button className='btn btn-block btn-info'>test</button>,
      <button className='btn btn-block btn-danger'>test</button>,
      <button className='btn btn-block btn-warning'>test</button>
    ]

    return <div className='container' style={{ backgroundColor: '#ccc' }}>
      <div className='row' style={{ marginTop: '40px' }}>
        <div className='row'>
          <div className='col-xs-6'>
            <MediaCard header={header} titleLeftMedia={media} buttons={button}>
              <h3>Some Content</h3>
            </MediaCard>
          </div>
          <div className='col-xs-6'>
            <MediaCard header={header} titleRightMedia={media} buttons={button} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <BaseCard titleRightMedia={media} verticalButtons buttons={button}>
              <h2>This is not a drill, this is the real deal</h2>
            </BaseCard>
          </div>
          <div className='col-xs-6'>
            <MediaCard header={header} bigMedia={bigMedia} />
          </div>
        </div>
      </div>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
