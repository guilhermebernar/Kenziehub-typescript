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


const SetTech = ({formTechs, setFormTechs})=> {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { inputTech } = useContext(Contexts)
  
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
            name='title' 
            type='text'
            {...register('title')}
            />
          <p>{errors.title?.message}</p>

          <label htmlFor='status'>Status</label>
          <select 
            name='status'
            {...register('status')}
            >
            <option value='Iniciante'>Iniciante</option>
            <option value='Intermediário'>Intermediário</option>
            <option value='Avançado'>Avançado</option>
          </select>
          <p>{errors.status?.message}</p>

          <Buttons>
              <ButtonPink type='submit'>Enviar</ButtonPink>
              <ButtonDarkGray onClick={()=>setFormTechs(false)}>Fechar</ButtonDarkGray>
          </Buttons>
        </FormDefaut>
        </ContainerForm>
      </motion.div>
    </BlurScreen>
    </>
  ):(
    <ContainerFormOff>
      <FormOffTitle>Tecnologias</FormOffTitle>
      <ButtonLightGray onClick={()=>setFormTechs(true)}>
        <Icon src={addTech}/>
      </ButtonLightGray>
    </ContainerFormOff>
  )
  }</>)
}

export default SetTech