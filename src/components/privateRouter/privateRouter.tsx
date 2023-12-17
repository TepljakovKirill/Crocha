import { AppRoutes } from "../../const";
import { Navigate } from "react-router-dom";

type TProtectedRouteProps = {
  restrictedFor: boolean;
  redirectTo: AppRoutes;
  children: JSX.Element;
};

function PrivateRoute({
  restrictedFor,
  redirectTo,
  children,
}: TProtectedRouteProps) {
  return restrictedFor ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
}

export default PrivateRoute;
