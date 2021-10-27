export default function ImageGalleryItem (props) {
  
        return (
            props.webformatURL.map(ImageURL => 
                <li className="ImageGalleryItem" key={ImageURL.id}>
                    <img src={ImageURL.webformatURL} alt={ImageURL.largeImageURL} className="ImageGalleryItem-image" onClick={props.toggle}/>
                </li>
            ))
}
