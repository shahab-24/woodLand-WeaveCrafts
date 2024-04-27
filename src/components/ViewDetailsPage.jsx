import { useLoaderData, } from "react-router-dom";


const ViewDetailsPage = () => {

  const craftDetails = useLoaderData();

  const { _id, name, price, image,  email, desc, processTime, rating, category, itemName, customization, stock_status} = craftDetails;
  console.log(_id);
  return (
    <div className="craftsContainer mt-10 mb-10">
    
    <div className="card w-96 bg-gray-200 shadow-xl mx-auto">
  <figure><img className="w-full p-6" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold">{itemName}</h2>
    <p><span className="text-xl font-bold text-orange-400">Descriptions: </span>{desc}</p>
    <p> <span className="text-xl font-bold text-orange-400">Price: </span>{price}</p>
    <p><span className="text-xl font-bold text-orange-400">Processing Time: </span>{processTime}</p>
    <p><span className="text-xl font-bold text-orange-400">Rating: </span>{rating}</p>
    <p><span className="text-xl font-bold text-orange-400">Category: </span>{category}</p>
    <p><span className="text-xl font-bold text-orange-400">Customization: </span>{customization}</p>
    <p><span className="text-xl font-bold text-orange-400">Stock Status: </span>{stock_status}</p>
    
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
      
    </div>
  );
};

export default ViewDetailsPage;