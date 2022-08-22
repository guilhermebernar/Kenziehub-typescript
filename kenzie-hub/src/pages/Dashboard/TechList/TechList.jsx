import deleteIcon from '../../../assets/delete_icon.png'
import { ButtonLightGray } from '../../../components/Buttons.style'
import { ContainerTech, IconDel, TechName, TechStatus } from "./TechList.style"
import { Contexts } from '../../../providers/Context'
import { useContext, useEffect } from 'react'

const RenderTechList = ({techs, index})=>{
  
  const { deleteTech, loadTechs } = useContext(Contexts);
 
  function excluir(id){
    deleteTech(id)
    return loadTechs()
  }

  return (
    <ContainerTech key={index}>
      <TechName>{techs.title}</TechName>
      <TechStatus>{techs.status}</TechStatus>
      <ButtonLightGray onClick={()=>excluir(techs.id)}>
        <IconDel src={deleteIcon} alt='Deletar tecnologia.' />
      </ButtonLightGray>
    </ContainerTech>
  );
}

export default RenderTechList