import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal__root');

export default function Modal (props) {


    useEffect(() => { window.addEventListener('keydown', toggleModal) })
        
    useEffect(() => { window.removeEventListener('keydown', toggleModal) })

   const toggleModal = e => {
        if (e.code === 'Escape') {
            props.toggle();
        }    
    }

    const toggleModalOverlay = e => {
        if (e.target === e.currentTarget) {
            props.toggle();
        }
    }

        return createPortal(
            <div className="Overlay" onClick={toggleModalOverlay}>
            <div className="Modal">
                    <img src={props.largeImg} alt="" />
            </div>
        </div>
        , modalRoot)
    
}