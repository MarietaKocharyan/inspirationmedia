import React, { Component } from 'react';
import { flickrImages, shutterStockVideos } from '../Api/api';

class MediaGalleryPage extends Component {
	 componentWillMount() {  // Api's part , from data
    flickrImages('rain').then(images => console.log(images, 'Images'));
    shutterStockVideos('rain').then(videos => console.log(videos,'Videos'));
  }
  render() {
	return (<div></div>)
  }
}

export default MediaGalleryPage;