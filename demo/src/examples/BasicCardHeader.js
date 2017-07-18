import React, {Component} from 'react'
import { BaseCard } from '../../../src'
import UtilStore from '../UtilStore'

export default class BasicCardHeader extends Component {
  render () {
    return (
      <div>
        <section className='col-xs-12'>
          <h1>Basic Card With Header</h1>
          <div className='src-code'>
            <pre>
              {'import {BaseCard} from "simple-react-card";'}
                <br />
              {'class TestCard extends React.Component {'}
              <br />
              {'    render() {                           '}
              <br />
              {'      const header = {image: "http://localhost/img/avatar2.jpg",'}
              <br />
              {'                      title: "Doyin Olarewaju",                 '}
              <br />
              {'                      subtitle: "Most awesome"                 '}
              <br />
              {'      }'}
              <br />
              {'      return <BaseCard header={header}> <h1>This is not a drill, this is the real deal</h1> </BaseCard>'}
              <br />
              {'    }' }
              <br />
                }
              </pre>
          </div>
        </section>

        <div className='col-xs-12'>
          <BaseCard header={UtilStore.header}>
            <h2>This is not a drill, this is the real deal</h2>
          </BaseCard>
        </div>
      </div>
    )
  }
}
