import React, {Component} from 'react'
import { BaseCard } from '../../../src'
import UtilStore from '../UtilStore'
import CodeBox from '../CodeBox'

export default class BasicCardWithButtons extends Component {
  render () {
    return (
      <div>
        <section className='col-xs-12'>
          <h1>Basic Card With Buttons</h1>
          <CodeBox>
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
            
            {'      const buttons = [<button className="btn btn-block btn-success">test</button>,'}
            <br />
            {'                        <button className="btn btn-block btn-info">test</button>]  '}
            <br />
            {'      }'}
            <br />
            {'      return (<BaseCard header={header}>'}
            {'                  <h1>This is not a drill, this is the real deal</h1>'}
            {'              </BaseCard>'}
            <br />
            {'              <BaseCard header={header} verticalButtons buttons={buttons}>'}
            {'                  <h1>This is not a drill, this is the real deal</h1>'}
            {'              </BaseCard> )'}
            <br />
            {'    }' }
            <br />
            }
          </CodeBox>
        </section>

        <div className='col-xs-12'>
          <BaseCard header={UtilStore.header} buttons={this.props.buttons}>
            <h2>This is not a drill, this is the real deal</h2>
          </BaseCard>
        </div>
        <div className='col-xs-12'>
          <BaseCard header={UtilStore.header} verticalButtons buttons={this.props.buttons}>
            <h2>This is not a drill, this is the real deal</h2>
          </BaseCard>
        </div>
      </div>
    )
  }
}
