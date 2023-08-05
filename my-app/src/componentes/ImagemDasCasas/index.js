import './ImagemDasCasas.css'
import React, { useState, useEffect } from 'react';

const imagemList = [
  '../ImagemDasCasasEpdf/academia.png',
  '../ImagemDasCasasEpdf/apartamentoFrente.png', 
  '../ImagemDasCasasEpdf/apInside.png', 
  '../ImagemDasCasasEpdf/interna.png', 
  '../ImagemDasCasasEpdf/newFoto.png', 
  '../ImagemDasCasasEpdf/PlantaImovel.png', 
  '../ImagemDasCasasEpdf/tons.png', 

];


const ImagemDasCasas = () =>{
  const [randomImagemInserida, setRandomImagemInserida] = useState(imagemList[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = getRandomImage();
    
      setRandomImagemInserida(imagemList[randomIndex]);
    }, 2000);

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