import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllCraftsPage = () => {

  const [craftItems, setCraftItems] = useState([]);


  useEffect(()=>{
    
    fetch('https://woodland-weave-crafts-server.vercel.app/crafts')
    .then(res => res.json())
    .then(data => setCraftItems(data))
  },[])

  // useEffect(() => {
  //   fetchCraftItems();
  // }, []);

  // const fetchCraftItems = async () => {
  //   try {
  //     const res = await fetch('woodland-weave-crafts-server-9l7r3dxhb-shahab-uddins-projects.vercel.app/crafts');
  //     const data = await res.json();
  //     console.log(data);
  //     setCraftItems(data);
  //   } catch (error) {
  //     console.error('Error fetching craft items:', error)
  //   }
  // };

  return (
    <div className="craftsContainer text-center mx-auto mb-10">
    <h2 className="text-2xl text-center font-bold text-gray-600 mt-6">All Art & Craft Items</h2>
    <table className="text-center border-4">
      <thead>
        <tr className="border-2">
          <th className="border-2">Item Name</th>
          <th className="border-2">Price</th>
          <th className="border-2">Category</th>
          <th className="border-2"></th>
        </tr>
      </thead>
      <tbody className="border-2">
        {craftItems.map((item) => (
          <tr className="border-2" key={item.id}>
            <td className="border-2">{item.itemName}</td>
            <td className="border-2">{item.price}</td>
            <td className="border-2">{item.category}</td>
            <td className="text-center p-4">
              <Link to={`/viewdetails/${item._id}`} className="btn hover:bg-[orange]">View Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default AllCraftsPage;