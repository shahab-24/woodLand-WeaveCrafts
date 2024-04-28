import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ViewDetailsPage from "./ViewDetailsPage";
import AddCrafts from "./AddCrafts";
import { child } from "firebase/database";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  if(loading) {
    return <span className="loading loading-bars loading-lg"></span>
  }
  if(user) {
    return children;
  }
  return (
    <div>
  <Navigate to='/login'></Navigate>
    </div>
  );
};

export default PrivateRoute;