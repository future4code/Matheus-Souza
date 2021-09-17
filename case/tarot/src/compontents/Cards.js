import React from "react";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import Modal from 'react-modal';
import styled from "styled-components"


const ImgContainer=styled.div`
width:300px;
height:350px;
img{
  width: 100%;
  height: 100%;
}

`
const ContainerModal=styled.div`
display: flex;
width:1000px;
align-items: center;
text-align: center;
`
const Description=styled.div`
height: 100%;
display: flex;
justify-content: flex-end;
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Img=styled.img`
width:100px;
height:180px;
`





const Card = ({ carta }) => {
  const [modalIsOpen, setIsOpen] =useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

    const [isFlipped, setIsFlipped] =useState(true)


    return (
      <>

<div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ContainerModal onClick={closeModal}>
       <ImgContainer>
        <img src={`https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/${carta.image}`}/>
       </ImgContainer>
       <Description>
        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncov
        er many web sites still in their infancy. Various versions have evolved over the ye
        ars, sometimes by accident, sometimes on purpose (injected humour and the like
       </Description>
       </ContainerModal>
      </Modal>
    </div>
       <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
         onClick={() => setIsFlipped((prev) => !prev)}
        >
          <div >
              <Img src={`https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/${carta.image}`}/>
          </div>

      </div>
        <div
          onClick={() => setIsFlipped((prev) => !prev)}>
              <Img onClick={openModal} src={"https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png"}/>
        </div>
      </ReactCardFlip>
      </>
    );
  };

  export default Card
  