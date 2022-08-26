import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { accountCreated, fail, techPosted, wellcome } from "../components/Mensages";
import { ILoginUser, IRegisterUser, IResponseAPI, ITechRegister, IUser } from "./interface";

interface IContext{
  user?: IUser;
  loginUser: (loginData: ILoginUser) => void;
  registerUser: (data:IRegisterUser) => void;
  inputTech: (data: ITechRegister) => void;
  deleteTech: (id:string|null) => void; 
  loadTechs: () => void;
  loading: boolean;
}

export const Contexts = createContext<IContext>({} as IContext)

interface IProvider{
  children: ReactNode;
}

const ContextsProvider = ({children}: IProvider) =>{

  const navigate = useNavigate()
  const [user, setUser]= useState<IUser>({} as IUser)
  const [token, setToken] = useState<string>("")
  const [loading, setLoading] = useState(true)
  // const location = useLocation()

  useEffect(()=>{
    async function loadUser() {
      if(token){
        try{
          
          api.defaults.headers.common.authorization = `Bearer ${token}`
          const { data } = await api.get('/profile');
          setUser(data);

        } 
        catch(err){console.log(err)} 
      }
      setLoading(false)
    }

    loadUser()
  },[token])

  async function loginUser(loginData: ILoginUser) {

    await api
    .post<IResponseAPI>('/sessions', loginData)
    .then(({data}) => {
      const {user, token} = data
      api.defaults.headers.common.authorization = `Bearer ${token}`

      const userHash = data.user.id
      // const toNavigate = location.state?.from?.pathname || `/dashboard/${userHash}`

      setUser(user)
  
      if(token!==null){
        setToken(token)
        localStorage.setItem('@kenzie-hub-1:token', token)
        if(localStorage.getItem('@kenzie-hub-1:token')!==null){
          navigate(`/dashboard/${userHash}`, { replace: true });
          wellcome()
        }
      }

  } )
    .catch(
      function () {
      fail();
    });
    ///
  }

  async function registerUser(data:IRegisterUser) {
    console.log(data);

      const response = await api.post('/users', data)

      console.log(response);
      navigate('/login', { replace: true });
      
      return accountCreated()
  }

  async function inputTech(data: ITechRegister) {
    console.log(data);

      const response = await api.post('/users/techs', data)
      const status = response.status
      if(status===201){
        const id = user.id
        const newResponseUser = await api.get(`/users/${id}`)
        setUser(newResponseUser.data)
        techPosted()
      }

  }

  async function deleteTech(id:string|null) {
    console.log(id);

      const response = await api.delete(`/users/techs/${id}`)

      console.log(response);
  }

  async function loadTechs() {
      const id = user.id
      const newResponseUser = await api.get(`/users/${id}`)

      setUser(newResponseUser.data)
    }

  return(
  <Contexts.Provider value={{ user, loginUser, registerUser, inputTech, deleteTech, loadTechs, loading }}>
    {children}
  </Contexts.Provider>
  )
}

export default ContextsProvider;