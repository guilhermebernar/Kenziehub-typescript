import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { accountCreated, fail, techPosted, wellcome } from "../components/Mensages";

export const Contexts = createContext({})

const ContextsProvider = ({children})=>{
  
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(()=>{
    async function loadUser() {
      if(token){
        try{
        
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get('/profile');
          setUser(data);

        } 
        catch(err){console.log(err)} 
      }
      setLoading(false)
    }

    loadUser()
  },[token])

  async function loginUser(data) {
    const response = await api.post('/sessions', data).catch(function (error) {
      fail();
    });
    const {user: userResponse, token: localToken} = response.data; 

    console.log(userResponse);
    setUser(userResponse)

    api.defaults.headers.authorization = `Bearer ${localToken}`

    const userHash = response.data.user.id
    const toNavigate = location.state?.from?.pathname || `/dashboard/${userHash}`

    if(localToken!==null){
      setToken(localToken)
      localStorage.setItem('@kenzie-hub-1:token', token)
      if(localStorage.getItem('@kenzie-hub-1:token')!==null){
        navigate(toNavigate, { replace: true });
        wellcome()
      }
    }
  }

  async function registerUser(data) {
    console.log(data);

      const response = await api.post('/users', data)

      console.log(response);
      navigate('/login', { replace: true });
      
      return accountCreated()
  }

  async function inputTech(data) {
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

  async function deleteTech(id) {
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