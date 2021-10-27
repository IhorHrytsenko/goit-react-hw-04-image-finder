import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import { useState } from 'react';
import Modal from './components/Modal';



function App() {

  const [queue, setQueue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState('');

  const handleQueue = (q = '') => {
    setQueue(q);   
  }

  const toggleModal = (e) => {
    setShowModal(!showModal);

    if (showModal === false && e !== undefined) {
      setLargeImg(e.target.alt);
    }
  }

    return (
      <div className="App">
        {showModal && <Modal toggle={toggleModal} largeImg={largeImg} />}
        <Searchbar queue={handleQueue} />
        <ImageGallery queue={queue} toggle={toggleModal} />  
      </div>
      

  );

}

export default App;
