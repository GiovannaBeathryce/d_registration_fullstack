import {Route, Routes} from 'react-router-dom'
import HomePage from '../pages/home/home'
import LoginPage from '../pages/login/login'
import Dashboard from '../pages/dashboard/dashboard'


const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/home' element={<HomePage/>}  />
            <Route path='/login' element={<LoginPage/>}  />
            <Route path='/contatos' element={<Dashboard/>}  />
        </Routes>
    )
}

export default RoutesMain