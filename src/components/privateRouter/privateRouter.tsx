import { AppRoutes, AuthorizationStatus } from "../../const";
import { Navigate } from "react-router-dom";

type TProtectedRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoutes;
  children: JSX.Element;
};

function PrivateRoute({
  restrictedFor,
  redirectTo,
  children,
}: TProtectedRouteProps) {
  const authorizationStatus = AuthorizationStatus.Auth;
  return restrictedFor !== authorizationStatus ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}

export default PrivateRoute;
