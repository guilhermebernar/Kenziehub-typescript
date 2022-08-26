import { ButtonDarkGray, ButtonLightGray, ButtonPink, Icon } from "../../../components/Buttons.style";
import{FormDefaut} from "../../../components/Form.style";
import { BlurScreen, Buttons, ContainerForm, ContainerFormOff, FormOffTitle, FormTitle } from "./setTech.style";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { Contexts } from '../../../providers/Context'
import { schema } from '../../../validators/inputTech'
import { motion } from 'framer-motion'
import addTech from '../../../assets/plus.png'
import { ITechRegister } from "../../../providers/interface";

interface ISetTech {
  formTechs: boolean;
  setFormTechs: (state: boolean) => void;
}

const SetTech = ({formTechs, setFormTechs}:ISetTech)=> {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechRegister>({ resolver: yupResolver(schema) });
  const { inputTech } = useContext(Contexts)

  const closeModal = ()=>setFormTechs(false)
  const openModal = ()=>setFormTechs(true)
  
  return (<>{formTechs?(
    <>
    
    <BlurScreen>    
      <motion.div
        animate={{ 
          scale: [0.1, 1]
        }}
      >
        <ContainerForm>
        <FormDefaut onSubmit={handleSubmit(inputTech)}>
          <FormTitle>Inserir Tecnologia</FormTitle>

          <label htmlFor='title' >Título</label>
          <input 
            id='title' 
            type='text'
            {...register('title')}
            />
          <p>{errors.title?.message}</p>

          <label htmlFor='status'>Status</label>
          <select 
            id='status'
            {...register('status')}
            >
            <option value='Iniciante'>Iniciante</option>
            <option value='Intermediário'>Intermediário</option>
            <option value='Avançado'>Avançado</option>
          </select>
          <p>{errors.status?.message}</p>

          <Buttons>
              <ButtonPink type='submit'>Enviar</ButtonPink>
              <ButtonDarkGray onClick={closeModal}>Fechar</ButtonDarkGray>
          </Buttons>
        </FormDefaut>
        </ContainerForm>
      </motion.div>
    </BlurScreen>
    </>
  ):(
    <ContainerFormOff>
      <FormOffTitle>Tecnologias</FormOffTitle>
      <ButtonLightGray onClick={openModal}>
        <Icon src={addTech}/>
      </ButtonLightGray>
    </ContainerFormOff>
  )
  }</>)
}

export default SetTech