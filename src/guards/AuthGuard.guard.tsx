import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { PublicRoutes, PrivateRoutes } from '../models/routes';
import { AppStore } from "../redux/store";

export const PrivateAuthGuard = () => {
    const { username } = useSelector( (store:AppStore) => store.user);
    const { userTeam } = useSelector( (store:AppStore) => store.teams);
    return username && userTeam.length !== 0 ? <Outlet /> :  username ? <Navigate replace to={PublicRoutes.HOME} /> : <Navigate replace to={PrivateRoutes.TEAM_SELECTION}></Navigate>
}


export const PublicAuthGuard = () => {
    const userState = useSelector( (store:AppStore) => store.user);
    return userState.username ? <Navigate replace to={PublicRoutes.HOME} /> : <Outlet/> ;
}