import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyCraftCard from "./MyCraftCard";


const MyCraftList = () => {
 const {user} = useContext(AuthContext);
 

 const [items, setItems] = useState([]);
 const [filteredCrafts, setFilteredCrafts] = useState([]);
 const [filterValue, setFilterValue] = useState('All');
 console.log(user);



 useEffect(() => {
  if(user) {
    fetch(` https://woodland-weave-crafts-server-7no6hpbe7-shahab-uddins-projects.vercel.app/myCard/${user?.email}`)
  .then((res) => res.json())
  .then((data) => {
    setItems(data);
    setFilteredCrafts(data);
  })
  
  }
 }, [user]);

 const handleFilterChange = (e) => {
  const value = e.target.value;
  setFilterValue(value);
  if (value === 'All') {
    setFilteredCrafts(items)
  } else {
    // Filter crafts based on customization value
    const filtered = items.filter(item => item.customization === value);
    setFilteredCrafts(filtered);
  }
};


  return (
    <div className="">
    <div>
        {/* Dropdown for filter */}
        <select value={filterValue} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
     <div className="grid md:grid-cols-2 gap-4 mt-10 mx-auto">
     {
        items.map(card => <MyCraftCard key={card._id} cards={card}
        items={items} setItems={setItems}>

        </MyCraftCard>
          
        )
      }
     </div>
    </div>
  );
};

export default MyCraftList;