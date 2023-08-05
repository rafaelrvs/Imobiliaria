
import ExibePdf from '../ExibePdf'
import ImagemDasCasas from '../ImagemDasCasas'
import './ConteudoCentral.css'

const ConteudoCentral =()=>{
  return(
    <div className='box__main'>
      <div id='Container1'><ImagemDasCasas/></div>
      <div id='Container1'><ExibePdf/></div>
    </div>
  )
}
export default ConteudoCentral