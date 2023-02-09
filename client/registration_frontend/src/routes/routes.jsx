import {Route, Routes, Navigate} from 'react-router-dom'
import HomePage from '../pages/home/home'
import LoginPage from '../pages/login/login'
import Dashboard from '../pages/dashboard/dashboard'
import ProtectedRoutes from './protectedRoutes'


const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/home' element={<HomePage/>}  />
            <Route path='/login' element={<LoginPage/>}  />
            <Route element={<ProtectedRoutes />}>
                <Route path='/contatos' element={<Dashboard/>}  />
            </Route>
            <Route path='*' element={<Navigate to='/login' replace/>}  />

        </Routes>
    )
}

export default RoutesMain