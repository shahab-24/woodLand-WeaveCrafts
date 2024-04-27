import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyCraftCard from "./MyCraftCard";


const MyCraftList = () => {
 const {user} = useContext(AuthContext);
 const [items, setItems] = useState([]);
 console.log(user);



 useEffect(() => {
  fetch(`http://localhost:4000/myCard/${user?.email}`)
  .then((res) => res.json())
  .then((data) => {
    setItems(data);
  })
 }, [user]);
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-10 mx-auto">
      {
        items.map(card => <MyCraftCard key={card._id} cards={card}
        items={items} setItems={setItems}>

        </MyCraftCard>
          
        )
      }
    </div>
  );
};

export default MyCraftList;