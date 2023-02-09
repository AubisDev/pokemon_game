import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { PublicRoutes, PrivateRoutes } from "../models";
import { AppStore } from "../redux/store";

export function PrivateAuthGuard() {
  const { username } = useSelector((store: AppStore) => store.user);
  const { userTeam } = useSelector((store: AppStore) => store.teams);
  return username && userTeam.length !== 0 ? (
    <Outlet />
  ) : username ? (
    <Navigate replace to={PublicRoutes.HOME} />
  ) : (
    <Navigate replace to={PrivateRoutes.TEAM_SELECTION} />
  );
}

export function TeamSelectGuard() {
  const { username } = useSelector((store: AppStore) => store.user);
  return username ? <Outlet /> : <Navigate replace to={PublicRoutes.HOME} />;
}
