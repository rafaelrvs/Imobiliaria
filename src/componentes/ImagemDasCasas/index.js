import './ImagemDasCasas.css'
import React, { useState, useEffect } from 'react';

const imagemList = [
  './imagemDasCasasEpdf/img/academia.png',
  './imagemDasCasasEpdf/img/apInside.png', 
  './imagemDasCasasEpdf/img/apartamentoFrente.png', 
  './imagemDasCasasEpdf/img/interna.png', 
  './imagemDasCasasEpdf/img/newfoto.png', 
  './imagemDasCasasEpdf/img/plantaimovel.png', 
  './imagemDasCasasEpdf/img/Planta.png', 
  './imagemDasCasasEpdf/img/tons.png',
  './imagemDasCasasEpdf/img/imagemAp.png',
];


const ImagemDasCasas = () =>{
  const [randomImagemInserida, setRandomImagemInserida] = useState(imagemList[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = getRandomImage();
    
      setRandomImagemInserida(imagemList[randomIndex]);
    }, 4000);

    return () => {
      clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    };
  }, []);

  function getRandomImage() {
   
    return Math.floor(Math.random() * imagemList.length);

  }

  return(
    <div className="container__img">
      <img id='img' src={randomImagemInserida }alt="esposição" />
    </div>
  )
}
export default ImagemDasCasas