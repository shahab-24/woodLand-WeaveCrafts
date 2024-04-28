import React from 'react';

const CategoryCard = ({categories}) => {

  const {_id, image, itemName, category, desc, info} = categories;
  return (
    <div>
      <div className="card craftsContainer mx-auto card-side bg-base-100 shadow-xl">
  <figure><img src={image}  className="w-1/2 object-cover rounded h-90"  alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default CategoryCard;