# react-card

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Synopsis

Simple-react-card is a React component that provides you with a simple material design card. Its simple, flexible and at thesame time advanced enough your needs.

## Code Example

Checkout the [Demo](https://github.com/gate3/simple-react-card/) for code examples

## Installation

npm install --save simple-react-card

## API Reference
# Basic Card
```jsx
import React, {Component} from 'react'
import { BaseCard } from 'simple-react-card'
export default class BasicCardTest extends Component {
  render () {
    const header = {image: 'https://unsplash.it/200/300',
        title: 'Doyin Olarewaju',
        subtitle: 'Most awesome'
    }
    const button = [
      <button className='btn btn-block btn-success'>test</button>,
      <button className='btn btn-block btn-info'>test</button>,
      <button className='btn btn-block btn-danger'>test</button>,
      <button className='btn btn-block btn-warning'>test</button>
    ]
    return (
        <BaseCard header={header} buttons={buttons}>
            <h2>This is not a drill, this is the real deal</h2>
        </BaseCard>
    )
  }
```

| Property     | Type           | Description   |
| :---         |     :---:      | ---:          |
| header       | object         | Information in the Card header. It should contain these options: **image(url), title and subtitle**. They are all optional|     
| buttons      | array          | An array of buttons with your styling and event handlers|
| verticalButtons | boolean     | Align the button vertically or horizontally. Default is horizontally. So leave out this option if you need horizontal buttons |

>All properties are optional. You can decide to exclude any of them.

# Media Card
```jsx
import React, {Component} from 'react'
import { MediaCard } from 'simple-react-card'
export default class MediaCardTest extends Component {

  testButton(){
    console.log('perform some action')
  }

  render () {
    const header = {image: 'https://unsplash.it/200/300',
        title: 'Doyin Olarewaju',
        subtitle: 'Most awesome'
    }
    const button = [
      <button className='btn btn-block btn-success' onClick={this.testButton.bind(this)}>test</button>,
      <button className='btn btn-block btn-info'>test</button>,
      <button className='btn btn-block btn-danger'>test</button>,
      <button className='btn btn-block btn-warning'>test</button>
    ]
    // used thesame image from the header variable
    const media = {
        image: header.image,
        title: 'Title',
        subtitle: 'Just a test'
    }
    // just appended a new property to the object since i want to use thesame set of properties
    const bigMedia = Object.assign({mediaStyle: {height: '300px'}}, media) 
    return (
        <MediaCard header={header} bigMedia={bigMedia} />

          <MediaCard header={header}
            titleRightMedia={media}
            buttons={buttons}>
            <h1>This is not a drill, this is the real deal</h1>
          </MediaCard>

          <MediaCard header={header} titleLeftMedia={media}
            buttons={buttons} verticalButtons>
            <h3>Some Content</h3>
          </MediaCard>
    )
  }
```

| Property     | Type           | Description   |
| :---         |     :---:      |      ---:     |
| header       | object         | Contents of the Card header. It should contain these options: **image(url), title and subtitle**. They are all optional|     
| buttons      | array          | An array of buttons with your styling and event handlers|
| verticalButtons | boolean     | Align the button vertically or horizontally. Default is horizontally. So leave out this option if you need horizontal buttons |
| bigMedia     |    object      |  Contents of the Card header. It should contain these options: **image(url), title, subtitle, mediaStyle**. They are all optional|
| titleLeftMedia |    object    |  Contents of the Card header. It should contain these options: **image(url), title, subtitle, mediaStyle**. They are all optional|
| titleRightMedia|    object    |  Contents of the Card header. It should contain these options: **image(url), title, subtitle, mediaStyle**. They are all optional|


>mediaStyle is used to style all the images. The big, right or left image.
>All properties are optional. You can decide to exclude any of them.

## Contributors

You can report your [issues here](https://github.com/gate3/simple-react-card/issues) or you can send me an email doyinolarewaju@gmail.com. I will be happy to help. Pull Requests are also welcome.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
