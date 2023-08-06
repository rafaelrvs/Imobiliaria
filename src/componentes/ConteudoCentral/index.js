
import ImagemDasCasas from '../ImagemDasCasas'
import './ConteudoCentral.css';

const ConteudoCentral =()=>{
  
  const imagem1 ='../imagemDasCasasEpdf/img/academia.png';
  const imagem2 ='../imagemDasCasasEpdf/img/apartamentoFrente.png';
  const imagem3 ='../imagemDasCasasEpdf/img/apInside.png';
  const imagem4 ='../imagemDasCasasEpdf/img/interna.png';
  const imagem5 ='../imagemDasCasasEpdf/img/newFoto.png';
  const imagem6 ='../imagemDasCasasEpdf/img/PlantaImovel.png';
  const imagem7 ='../imagemDasCasasEpdf/img/tons.png';

  return(
    <div className='container-all-img'>
      <div  className='box__header'>
        <div id='Container1'><ImagemDasCasas/></div>
      </div>
        <div className='container__main'>
  
        <div id='container__particao__img' ><img id="imagem" src={imagem1}/></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem2} alt="" /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem3} /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem4} alt="" /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem5} alt="" /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem6}alt="" /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem7} /></div>
        </div>

    </div>
    
  )
}
export default ConteudoCentral