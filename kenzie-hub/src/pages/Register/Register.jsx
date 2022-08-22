import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validators/registerUser';
import { ButtonDarkGray, ButtonPink } from '../../components/Buttons.style';
import Logo from '../../assets/logo_kenziehub.png'
import { ContainerButton, ContainerRegister, FormFields, HeaderRegister, RegisterSubTitle, RegisterTitle } from './Register.style';
import { FormDefaut } from '../../components/Form.style';
import { LogoImg } from '../../components/LogoImg.style';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Contexts } from '../../providers/Context';
import { MainRegister } from '../../components/Backgrounds.style';

const Register = ()=>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema),});

  const {registerUser} = useContext(Contexts)

  return (
    <MainRegister>

      <HeaderRegister>
        <LogoImg src={Logo} alt="Logo kenziehub" />
        
        <Link replace to="/login">
         <ButtonDarkGray>Voltar</ButtonDarkGray>
        </Link>
        
      </HeaderRegister>
      <ContainerRegister>
        
        <div>
          <RegisterTitle>Crie sua conta</RegisterTitle>
          <RegisterSubTitle>Rápido e grátis, vamos</RegisterSubTitle>
        </div>
        
        <FormDefaut onSubmit={handleSubmit(registerUser)}>
          <FormFields >
            <label htmlFor='name'>Nome:</label>
            <input type='text' id='name' {...register('name')} />
            <p>{errors.name?.message}</p>

            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' {...register('email')} />
            <p>{errors.email?.message}</p>

            <label htmlFor='password'>Senha:</label>
            <input type='password' id='password' {...register('password')} />
            <p>{errors.password?.message}</p>

            <label htmlFor='confirm-password'>Confirmar Senha:</label>
            <input
              type='password'
              id='confirm-password'
            />
            <p>{errors.confirmPassword?.message}</p>

            <label htmlFor='bio'>Bio:</label>
            <input type='text' id='bio' {...register('bio')} />
            <p>{errors.bio?.message}</p>
  
            <label htmlFor='contact'>Celular:</label>
            <input type='text' id='contact' {...register('contact')} />
            <p>{errors.contact?.message}</p>

            <label htmlFor='course_module'>Celular:</label>
            <select type='text' name='course_module' id='course_module' {...register("course_module")}>
              <option value='1º Modulo' >1º Modulo</option>
              <option value='2º Modulo' >2º Modulo</option>
              <option value='3º Modulo' >3º Modulo</option>
              <option value='4º Modulo' >4º Modulo</option>
              <option value='5º Modulo' >5º Modulo</option>
              <option value='6º Modulo' >6º Modulo</option>
            </select>
          </FormFields>
          <ContainerButton>
            <ButtonPink type='submit'>Cadastrar</ButtonPink>
          </ContainerButton>
        </FormDefaut>
      </ContainerRegister>
    </MainRegister>
    );
}

export default Register