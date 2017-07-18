import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import AppDemoContainer from './AppDemoContainer'
import {BaseCardExample, BaseCardHeader, BasicCardWithButtons, MediaCardExample} from './examples'

class App extends Component {
  render () {
    const button = [
      <button className='btn btn-block btn-success'>test</button>,
      <button className='btn btn-block btn-info'>test</button>,
      <button className='btn btn-block btn-danger'>test</button>,
      <button className='btn btn-block btn-warning'>test</button>
    ]
    return (
      <AppDemoContainer
        title='Simple React Card'
        subtitle='A simple card container implementation with as minimal design as possible for your needs'>

        <div className='col-xs-10 main-container'>

          <section className='col-xs-12'>
            <h1 className='section-title'>Installation</h1>
            <div className='src-code'>
              <p>npm install simple-react-card --save</p>
            </div>
          </section>

          <section className='col-xs-12'>
            <h1 className='section-title'>Usage</h1>
          </section>

          <BaseCardExample />

          <BaseCardHeader />

          <BasicCardWithButtons buttons={[button[0], button[1]]} />

          <MediaCardExample buttons={button} />

        </div>

      </AppDemoContainer>
    )
  }
}

export default App
