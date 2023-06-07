import React, { useState } from 'react';
import Modal from 'react-modal';

const ResumeModal = ({ logoSrc, altText, buttonText, logoSize }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:w-96 rounded p-5 bg-gradient-to-r from-gray-600 via-gray-300 to-purple-900 shadow-xl shadow-blue-300/30 m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <div className="flex flex-col items-center justify-center mb-4">
        <img className={logoSize} src={logoSrc} alt={altText} onClick={openModal} />
        <button className="text-black rounded bg-blue-300 focus:outline-none hover:opacity-90 p-2 text-sm font-medium leading-3 mt-2 no-underline" onClick={openModal}>{buttonText}</button>
      </div>
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        contentLabel={altText} 
        className="modal"
      >
        <img src={logoSrc} alt={altText} />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ResumeModal;
