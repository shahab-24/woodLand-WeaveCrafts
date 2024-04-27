import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ViewDetailsPage from "./ViewDetailsPage";



const PrivateRoute = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      {/* {
        user ? (<ViewDetailsPage></ViewDetailsPage> ): (<Redirect to="/login"></Redirect>)
      } */}
    </div>
  );
};

export default PrivateRoute;