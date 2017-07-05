import React from 'react';
import './MediaCard.css';
import BaseCard from '../BaseCard'
import PropTypes from 'prop-types'

class MediaCard extends BaseCard {
  
  mediaRender(){
    super.mediaRender()
    
    let bigMedia = null, rightMedia = null, leftMedia = null;
    
    if(this.props.bigMedia != null){
      const media = this.props.bigMedia
      bigMedia = (<div className='col-xs-12 no-padding'>
                <img src={media.image} alt='big media' className='big-media' style={media.mediaStyle}/>
                <div className='col-xs-12'><h3>{media.title}</h3></div>
              </div>)
    }

    if(this.props.titleRightMedia != null){ 
      const media = this.props.titleRightMedia
      rightMedia = (<div className='row media-spacing'>
                  <div className='col-xs-12 col-sm-12 col-md-8'>
                    <div className='col-xs-12'>
                      <h2 className='no-margin'>{media.title}</h2>
                      <h4 className='subtitle no-margin'>{media.subtitle}</h4>
                    </div>

                </div>
                <div className='col-xs-12 col-sm-12 col-md-4'>
                    <img src={media.image} alt='big media' className='small-media' style={media.mediaStyle}/>
                  </div>
              </div>)
    }
    
    if(this.props.titleLeftMedia != null){ 
      const media = this.props.titleLeftMedia
      leftMedia = (<div className='row media-spacing'>
                  <div className='col-xs-12 col-sm-12 col-md-4' style={{ left:'12px' }}>
                    <img src={media.image} alt='big media' className='small-media' style={media.mediaStyle}/>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-8'>
                    <h2 className='no-margin'>{media.title}</h2>
                    <h4 className='subtitle no-margin'>{media.subtitle}</h4>
                </div>
              </div>)
    }

      if(bigMedia != null){
        return bigMedia
      }else{
        if(rightMedia != null ){
          return rightMedia
        }

        if(leftMedia != null ){
          return leftMedia
        }
      }
  }

  contentRender(){
    super.contentRender()
    return  this.props.children
  }

  render = () => (
    super.render()
  )
}

MediaCard.PropTypes = {
  bigMedia:PropTypes.object,
  titleLeftMedia:PropTypes.object,
  titleRightMedia:PropTypes.object,
}

export default MediaCard
