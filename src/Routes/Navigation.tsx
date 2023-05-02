import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { PrivateAuthGuard, TeamSelectGuard } from "../guards/AuthGuard.guard";
import { PublicRoutes, PrivateRoutes } from "../models/route.model";
import RoutesWithNoFound from "../utilities/RoutesWithNoFound";

const Battle = lazy(() => import("../pages/Battle/Battle"));
const TeamSelection = lazy(() => import("../pages/ChooseTeam/ChooseTeam"));
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));

function Navigation() {
  return (
    <Suspense fallback={<>Cargando...</>}>
      <BrowserRouter>
        <RoutesWithNoFound>
          <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
          <Route path={PublicRoutes.HOME} element={<Home />} />
          <Route path={PublicRoutes.ABOUT} element={<About />} />
          <Route element={<TeamSelectGuard />}>
            <Route
              path={`${PrivateRoutes.TEAM_SELECTION}`}
              element={<TeamSelection />}
            />
          </Route>
          <Route element={<PrivateAuthGuard />}>
            <Route path={`${PrivateRoutes.BATTLE}`} element={<Battle />} />
          </Route>
        </RoutesWithNoFound>
      </BrowserRouter>
    </Suspense>
  );
}
export default Navigation;
