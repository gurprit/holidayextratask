import React from 'react'

const ImageCard = ({imageData}) => {
    console.log(imageData);
    const { title, pathalias, ownername, id, farm, server, secret, description, tags } = imageData;
    const imgUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    const profileUrl = `https://www.flickr.com/photos/${pathalias}/`;
    const flickrPhotoUrl = `${profileUrl}/${id}/`;
    const tagUrl = null;
    
    const tagArray = tags.split(' ');
    
    


    
    return (
        <div className="photo-card">

           <div className="img-container">
               <a href={flickrPhotoUrl} target="_blank">
                   <img src={imgUrl} alt={tags}/>
                </a>
            </div>
           <div className="photo-card__title">
                <h2><a href={flickrPhotoUrl} target="_blank">{title}</a></h2>
                <p>by <a href={profileUrl} target="_blank">{ownername}</a></p>
            </div>
           {!!(description._content)?<div className="photo-card__description" ><p>{description._content}</p></div>:""}


           <div className="photo-card__tags">
               <ul>
                    {tagArray.map((tag, index) => (
                        <li key={index}><a href={`https://www.flickr.com/photos/tags/${tag}/`}>{tag}</a></li>
                    ))}
                </ul>
           </div>
        </div>
    )
}

export default ImageCard
