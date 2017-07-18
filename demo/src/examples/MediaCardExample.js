import React, {Component} from 'react'
import { MediaCard } from '../../../src'
import UtilStore from '../UtilStore'
import CodeBox from '../CodeBox'

export default class MediaCardExamples extends Component {
  render () {
    return (
      <div>
        <section className='col-xs-12'>
          <h1>Media Card</h1>
          <CodeBox>
            {'import {MediaCard} from "simple-react-card";'}
            <br />
            {'class TestCard extends React.Component {'}
            <br />
            {'    render() {                           '}
            <br />
            {'      const header = {image: "http://localhost/img/avatar2.jpg",'}
            <br />
            {'                      title: "Doyin Olarewaju",                 '}
            <br />
            {'                      subtitle: "Most awesome"                  '}
            <br />
            {'      const media = { image: header.image,                      '}
            <br />
            {'                      title: "Title",                           '}
            <br />
            {'                      subtitle: "Just a test"                   '}
            <br />
            {'                    }                                           '}
            <br />
            {'      }'}

            {'      const buttons = [<button className="btn btn-block btn-success">test</button>,'}
            <br />
            {'                        <button className="btn btn-block btn-danger">test</button>,'}
            <br />
            {'                        <button className="btn btn-block btn-info">test</button>]  '}
            <br />
            {'      }'}
            <br />
            {'      return (<MediaCard header={header} bigMedia={bigMedia} />'}
            <br />
            {'              <MediaCard header={header} titleRightMedia={media} buttons={buttons}>'}
            {'                  <h1>This is not a drill, this is the real deal</h1>'}
            {'              </MediaCard>'}
            <br />
            {'              <MediaCard header={header} titleLeftMedia={media} verticalButtons buttons={buttons}>'}
            {'                  <h1>This is not a drill, this is the real deal</h1>'}
            {'              </MediaCard> )'}
            <br />
            {'    }' }
            <br />
            }
          </CodeBox>
        </section>

        <div className='col-xs-12'>
          <MediaCard header={UtilStore.header} bigMedia={UtilStore.bigMedia} />

          <MediaCard header={UtilStore.header}
            titleRightMedia={UtilStore.media}
            buttons={this.props.buttons}>
            <h1>This is not a drill, this is the real deal</h1>
          </MediaCard>

          <MediaCard header={UtilStore.header} titleLeftMedia={UtilStore.media}
            buttons={this.props.buttons} verticalButtons>
            <h3>Some Content</h3>
          </MediaCard>

        </div>
      </div>
    )
  }
}
