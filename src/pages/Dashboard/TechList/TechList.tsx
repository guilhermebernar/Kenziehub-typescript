import deleteIcon from '../../../assets/delete_icon.png'
import { ButtonLightGray } from '../../../components/Buttons.style'
import { ContainerTech, IconDel, TechName, TechStatus } from "./TechList.style"
import { Contexts } from '../../../providers/Context'
import { useContext } from 'react'
import { IRenderTech } from './intefaces'

const RenderTechList = ({techData, index}:IRenderTech)=>{

  console.log(techData, index)
  
  const { deleteTech, loadTechs } = useContext(Contexts);
 
  function excluir(id:string|null){
    deleteTech(id)
    return loadTechs()
  }

  return (
    <ContainerTech key={index}>
      <TechName>{techData.title}</TechName>
      <TechStatus>{techData.status}</TechStatus>
      <ButtonLightGray onClick={()=>excluir(techData.id)}>
        <IconDel src={deleteIcon} alt='Deletar tecnologia.' />
      </ButtonLightGray>
    </ContainerTech>
  );
}

export default RenderTechList