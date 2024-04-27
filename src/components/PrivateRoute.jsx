import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ViewDetailsPage from "./ViewDetailsPage";
import AddCrafts from "./AddCrafts";



const PrivateRoute = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
    <AddCrafts></AddCrafts>
    <ViewDetailsPage></ViewDetailsPage>
    </div>
  );
};

export default PrivateRoute;