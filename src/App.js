import React, { useState, useEffect } from 'react';
import './App.scss';
import ImageCard from './components/ImageCard/ImageCard'


const App = () => {
  const [photos, setPhotos] = useState(null);

  const fetchFlickrdata = () => {
    fetch('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=2a0b9c81a6daa39ee08fb2c9569a4d64&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1&extras=owner_name,description,tags,path_alias')
    .then(res => res.json())
    .then(data => setPhotos(data?.photos?.photo))
  }

  useEffect(() => {
    if (photos) return photos;
    if (!photos) return fetchFlickrdata();
  }, [photos])

  const displayPhotoStream = (photos) => (
    photos && photos.map((photo) => {
      return (
        <div key={photo.id} className="photo-card__cont">
          <ImageCard imageData={photo}/>
        </div>
      )
    })
  )

  return (
    <div className="App">
      <h1>Flickr Photo Stream</h1>
      <div className="photo-grid">
        {photos && displayPhotoStream(photos)}
        </div>
    </div>
  )
}


export default App;
