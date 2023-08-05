import './ImagemDasCasas.css'
import React, {useEffect } from 'react';

let imagem = './ImagemDasCasasEpdf/tons.png'

const ImagemDasCasas = () =>{
  
  
  useEffect(() => {
    const handlePageLoad = () => {
      // Ação a ser realizada quando a página é carregada (refresh)
     setTimeout(() => {
      imagem = './ImagemDasCasasEpdf/apartamentoFrente.png'
     },200);
    };
  
    window.addEventListener('load', handlePageLoad);
  
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);
  
  return(
    <div className="container__img">
      <img id='img' src={imagem }alt="" />
    </div>
  )
}
export default ImagemDasCasas