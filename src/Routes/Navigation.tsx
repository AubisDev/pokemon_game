import { Suspense } from "react"
import About from "../pages/About/About"
import Home from "../pages/Home/Home"
import { BrowserRouter, Route, Navigate } from 'react-router-dom';
import { PrivateAuthGuard, TeamSelectGuard } from '../guards/AuthGuard.guard';
import { PublicRoutes, PrivateRoutes } from "../models/routes";
import ChooseTeam from "../pages/ChooseTeam/ChooseTeam";
import RoutesWithNoFound from "../utilities/RoutesWithNoFound";
import Battle from "../pages/Battle/Battle";



// const About= lazy( () => import('../pages/Public/About/About'));
// const Product= lazy( () => import('../pages/Public/Product/Product'));
// const Login = lazy(() => import('../pages/Public/Login/Login'));
// const Inventory = lazy(() => import('../pages/Public/Inventory/Inventory'));
// const Register = lazy(() => import('../pages/Public/Register/Register'));
// const Checkout = lazy( () => import('../pages/Private/Checkout/Checkout'));
// const Home = lazy(() => import('../pages/Public/Home/Home'));

const Navigation = () => {
  return (
    <Suspense fallback={<>Cargando...</>}>
            <BrowserRouter>
                <RoutesWithNoFound>
                    <Route path={'/'} element={ <Navigate to={PublicRoutes.HOME} />} />
                    <Route path={PublicRoutes.HOME} element={ <Home/>} />
                    <Route path={PublicRoutes.ABOUT} element={ <About/>} />
                    <Route element={<TeamSelectGuard/>}>
                        <Route path={`${PrivateRoutes.TEAM_SELECTION}`} element={<ChooseTeam/>} />
                    </Route>
                    <Route element={<PrivateAuthGuard/>}>
                        <Route path={`${PrivateRoutes.BATTLE}`} element={<Battle/>} />
                    </Route>
                </RoutesWithNoFound>
            </BrowserRouter>
        </Suspense>
  )
}
export default Navigation