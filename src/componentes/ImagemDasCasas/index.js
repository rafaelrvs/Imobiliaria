import './ImagemDasCasas.css'
import React, { useState, useEffect } from 'react';

const imagemList = [
  './imagemDasCasasEpdf/img/academia.png',
  './ImagemDasCasasEpdf/img/apInside.png', 
  './ImagemDasCasasEpdf/img/apartamentoFrente.png', 
  './ImagemDasCasasEpdf/img/interna.png', 
  './ImagemDasCasasEpdf/img/newfoto.png', 
  './ImagemDasCasasEpdf/img/PlantaImovel.png', 
  './ImagemDasCasasEpdf/img/Planta.png', 
  './ImagemDasCasasEpdf/img/tons.png',
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