import React from 'react';
import cl from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {

    const root = [cl.modal]
    if (visible) {
        root.push(cl.modalActive)
    }

    return (
        <div className={root.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modalContent} onClick={(event) => event.stopPropagation()}>
                {children}
                    <svg className={cl.closeModal} xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vh" viewBox="0 0 50 50"
                         onClick={() => setVisible(false)}>
                        <path
                            d="M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281 7.72 43.72 25 26.437 42.281 43.72l1.438-1.438L26.437 25 43.72 7.719 42.28 6.28 25 23.563Z"/>
                    </svg>
            </div>
        </div>
    );
};

export default Modal;