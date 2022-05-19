
import { Navigate, Outlet } from "react-router-dom"


const userAuth = () => {
  let Details = JSON.parse(sessionStorage.getItem("Details"))
  return Details;
}

const ProtectedRoute = () => {
    const isAuth = userAuth();
  

    return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute