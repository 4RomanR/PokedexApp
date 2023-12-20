import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProyectedRoutes = () => {
    const trainerName = useSelector((store) => store.trainerName.name)
    if(trainerName != ""){
        return <Outlet />
    }else{
        return <Navigate  to="/"/>
    }
}
export default ProyectedRoutes