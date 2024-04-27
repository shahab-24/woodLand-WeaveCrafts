import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCraftCard = ({cards, items, setItems}) => {

  
  const { _id, name, price, image,  email, desc, processTime, rating, category, itemName, customization, stock_status} = cards;
  


  const handleDelete = (_id) =>{
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
    

        fetch(`http://localhost:4000/viewdetails/${_id}`,{
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          console.log('delete confirmed'); 
          if(data.deletedCount > 0){
            

          Swal.fire({
          title: "Deleted!",
          text: "Your Crafts has been deleted.",
          icon: "success"
        }
        
        
      )
      
      const remaining = items.filter (item => item._id == _id);
      setItems(remaining);
      
          }
          
         
        })
        // const remaining = cards.filter(card => card._id !== _id);
        // console.log(remaining);
        //  setCards(remaining);
      }
    });

  }

  return (
    <div className='craftsContainer'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img className="" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold">{itemName}</h2>
    <p>{desc}</p>
    <div className="card-actions justify-end flex">
     <Link to={`/updateCard/${_id}`}>
     <button className="btn btn-gray-400">Update</button>
     </Link>
     
     <button onClick={() => handleDelete(_id)} className="btn btn-gray-400">Delete</button>
     
    </div>
  </div>
</div>
    </div>
    
  );
};

export default MyCraftCard;

// to={`viewdetails/${_id}`}
// to={`viewdetails/${_id}`}