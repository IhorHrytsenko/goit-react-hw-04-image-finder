import ImageGalleryItem from './ImageGalleryItem';
import React, { useState, useEffect} from 'react';
import Loader from "react-loader-spinner";

const KEY = '23099415-b292849e49f5632c41c65f5ef';

function ImageGallery(props) {

    const [page, setPage] = useState(1);
    const [webformatURL, setWebformatURL] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {

        if (props.queue) {
            setLoading(true);
            setPage(1);
            setWebformatURL([]);
            api(props.queue);
            setPage(page + 1);
        }

        }, [props.queue]);
    
    const handleOnClick = () => {
        setPage(page + 1);
        api();
    }

    function api(queue = '') {
        
        setLoading(true);
        try {
            fetch(`https://pixabay.com/api/?q=${queue}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(webformatURL => {
                    
                    setWebformatURL(webformat => [ ...webformat, ...webformatURL.hits]); 
                })
                .finally(() => {
                    setLoading(false);

                    window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                    });
                }
            )       
        }

        catch (error) {
            console.log(error);
        }


    }
  
    if (loading && webformatURL.length === 0) {
                
        return (<React.StrictMode>
                    <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                    className="loader"
                />                    
            </React.StrictMode>
        );
    }

    if (props.queue) {
            return (<React.StrictMode>
                <ul className="ImageGallery">
                    {<>
                            <ImageGalleryItem webformatURL={webformatURL} toggle={props.toggle} getLargeImd={props.getLargeImd} />
                    </>
              
                    }
                </ul>

                {loading === true
                    ? <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                    className="loader"
                /> 
                    
                    : <button type='button' className="Button" onClick={handleOnClick}>Загрузить больше...</button>
                }
            </React.StrictMode>
        )       
    }

    if (!loading) {
        return (
        <div>     
        <p>К сожалению, тут пока что ничего нет...</p>
        </div>
        )
    }
    
}

export default ImageGallery;