import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AuthRoutes from './AuthRoutes';


const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Register/>}/>
              <Route element={<AuthRoutes/>}>
                <Route path="/dashboard/:id" element={<Dashboard/>}/>
              </Route>
            <Route path="*" element={<Navigate replace to="/login"/>}/>
        </Routes>
    )
}

export default RoutesMain