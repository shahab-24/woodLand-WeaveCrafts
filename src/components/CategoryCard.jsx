import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({categories}) => {

  const { image, itemName, category, desc, info} = categories;
  return (
    <Link to={`/cardDetails/${category}`}>
      <div>
      <div className="card craftsContainer mx-auto  shadow-xl  bg-[whitesmoke] transition border-2 border-accent hover:scale-105  hover:border-secondary border-opacity-30 rounded-3xl ">
  <figure><img src={image}  className="w-full rounded h-[100%] object-left p-4"  alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{itemName}</h2>
    <p>{desc}</p>
    <p>{info}</p>
    <div className="card-actions justify-end">
      <Link to={`/cardDetails/${category}`}>

        <button className="btn btn-primary bg-orange-400">View Details</button>
      </Link>
    </div>
  </div>
</div>
    </div>
    </Link>
  );
};

export default CategoryCard;