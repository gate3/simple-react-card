const header = {image: 'https://unsplash.it/200/300',
  title: 'Doyin Olarewaju',
  subtitle: 'Most awesome'
}

const media = {
  image: header.image,
  title: 'Title',
  subtitle: 'Just a test'
}

const bigMedia = Object.assign({mediaStyle: {height: '300px'}}, media)

export default {
  header,
  media,
  bigMedia
}
