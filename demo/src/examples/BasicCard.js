import React, {Component} from 'react'
import { BaseCard } from '../../../src'

export default class BasicCard extends Component {
  render () {
    return (
      <div>
        <section className='col-xs-12'>
          <h1>Basic Card</h1>
          <div className='src-code'>
            <pre>
              {'import {BaseCard} from "simple-react-card";'}
              <br />
              {'class TestCard extends React.Component {'}
              <br />
              {'    render() {                           '}
              <br />
              {'    return <BaseCard> <h1>This is just a test</h1> </BaseCard>'}
              <br />
              {'    }' }
              <br />
                }
              </pre>
          </div>
        </section>

        <div className='col-xs-12'>
          <BaseCard><h1>This is just a test</h1></BaseCard>
        </div>
      </div>
    )
  }
}
