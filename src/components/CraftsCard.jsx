import { Link } from "react-router-dom";


const CraftsCard = ({craft}) => {
   const { _id, name, price, image,  email, desc, processTime, rating, category, itemName, customization, stock_status} = craft;
  return (
    <div>
      
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img className="" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold">{itemName}</h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
     <Link to={`viewdetails/${_id}`}>
     <button className="btn btn-gray-400">View Details</button>
     </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default CraftsCard;