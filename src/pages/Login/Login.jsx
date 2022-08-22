import logo from '../../assets/logo_kenziehub.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validators/loginUser';
import { FormDefaut } from '../../components/Form.style';
import { ContainerLogin, HeaderLogin, LoginArt, LoginTitle, Question } from './Login.style';
import { ButtonLightGray, ButtonPink } from '../../components/Buttons.style';
import { LogoImg } from '../../components/LogoImg.style';
import { useContext } from 'react';
import { Contexts } from '../../providers/Context';
import { Link } from "react-router-dom";
import { MainLogin } from '../../components/Backgrounds.style';
import { motion } from 'framer-motion'
import loginArt from '../../assets/loginTheme.png'

const Login = ()=> {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const {loginUser} = useContext(Contexts)
    
    return(
        <MainLogin>
            <HeaderLogin>
              <LogoImg src={logo} alt="logo"/>
            </HeaderLogin> 
            
            <ContainerLogin>
                
                <LoginTitle>
                  Login
                </LoginTitle>
                
                <FormDefaut onSubmit={handleSubmit(loginUser)}>

                  <label htmlFor='email'>Email:</label>
                  <input type='text' id='email' {...register('email')} />
                  <p>{errors.email?.message}</p>

                  <label htmlFor='password'>Senha:</label>
                  <input type='password' id='password' {...register('password')} />
                  <p>{errors.password?.message}</p>

                  <ButtonPink type='submit'>
                    Entrar
                  </ButtonPink>

                  <motion.div
                    animate={{ 
                      scale: [0.1, 1]
                    }}
                  >
                    <LoginArt src={loginArt} alt='Arte: Jovem sentado com notebook não'/>
                  </motion.div>

                  <Question>
                    Não possui uma conta?
                  </Question>
                  
                    <Link to="/cadastro">
                      <ButtonLightGray>
                        <span>Cadastrar</span>
                      </ButtonLightGray>
                    </Link>
                  

                </FormDefaut>
            </ContainerLogin>
        
        </MainLogin>
    )
}

export default Login