import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";


const UpdatePage = () => {
  const {user} = useContext(AuthContext);
  const updateCard = useLoaderData();
  const {_id, name, price, image,  email, desc, processTime, rating, category, itemName, customization, stock_status} = updateCard;


  const handleUpdate = (e) => {
    e.preventDefault();

    const name = user?.userName;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const desc = e.target.description.value;
    const processTime = e.target.processing_time.value;
    const rating = e.target.rating.value;
    const category = e.target.subcategory_name.value;
    const itemName = e.target.item_name.value;
    const customization = e.target.customization.value;
    const stock_status = e.target.stock_status.value;
    
    const email = user?.email;

  

    const updateInfo = { name, price, image,  email, desc, processTime, rating, category, itemName, customization, stock_status};
  

// fetrching data frim
    fetch(`woodland-weave-crafts-server-9l7r3dxhb-shahab-uddins-projects.vercel.app/updateCard/${_id}`,{
      method: "PuT",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(updateInfo)
    })
      .then(res => res.json())
      .then(data =>{
        if (data?.modifiedCount>0) {
          Swal.fire({
            title: 'success!',
            text: 'You Have Updated a Crafts Item',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

        
      }
    })
  }




  return (
    <div>
      

      <div className="craftsContainer pt-10">
       <div className="bg-gray-200 p-24 rounded-lg">
      <h2 className="text-3xl font-extrabold mb-10 text-center">CRAFTS ITEMS : {itemName}</h2>
      <form onSubmit={handleUpdate}>
      {/* name and quantity */}
        <div className="md:flex gap-4 md-8">
            <div className="md:w-1/2">
            <label className="form-control w-full">
  <div className="label">
    <span className="label-text">User Name</span>
    
  </div>
  <input type="text" placeholder="User Name" name="userName" defaultValue={name} className="input input-bordered md:w-full" />
  
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">User Email</span>
    
  </div>
  <input type="text" placeholder="User Email" name="userEmail" defaultValue={email} className="input input-bordered md:w-full" />
  
              </label>
            </div>
           
        
            
        </div>

        <div className="md:flex gap-4 md-8">
        <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Subcategory Name</span>
    
  </div>
  <input type="text" placeholder="subcategory name" name="subcategory_name" defaultValue={category} className="input input-bordered md:w-full" />
  
              </label>
            </div>

            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Item Name</span>
    
  </div>
  <input type="text" placeholder="itemName" name="item_name" defaultValue={itemName} className="input input-bordered md:w-full" />
  
              </label>
            </div>

        </div>


           {/* supplier and taste */}
        <div className="md:flex gap-4 md-8">
            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Short Description</span>
    
  </div>
  <input type="text" placeholder="description" name="description" defaultValue={desc} className="input input-bordered md:w-full" />
  
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Price</span>
    
  </div>
  <input type="text" placeholder="Price" name="price" defaultValue={price} className="input input-bordered md:w-full" />
  
              </label>
            </div>
            
        </div>
           {/* Category and Details*/}
        <div className="md:flex gap-4 md-8">
            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Rating</span>
    
  </div>
  <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered md:w-full" />
  
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Processing Time</span>
    
  </div>
  <input type="text" placeholder="Processing time" name="processing_time" defaultValue={processTime} className="input input-bordered md:w-full" />
  
              </label>
            </div>
            
        </div>


        <div className="md:flex gap-4 md-8">
        <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Customization</span>
    
  </div>
  <input type="text" placeholder="customization" name="customization" defaultValue={customization} className="input input-bordered md:w-full" />
  
              </label>
            </div>

            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Stock Status</span>
    
  </div>
  <input type="text" placeholder="stock status" name="stock_status" defaultValue={stock_status} className="input input-bordered md:w-full" />
  
              </label>
            </div>

        </div>

       

           {/* Photo URL */}
        <div className="md:flex gap-4 md-8">
            <div className="md:w-full">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Photo URL</span>
    
  </div>
  <input type="text" placeholder="image URL" name="image" defaultValue={image} className="input input-bordered md:w-full" />
  
              </label>
            </div>
            
            
        </div>
        <input type="submit" value="UPDATE" className="text-xl text-white font-bold btn bg-black hover:bg-[grey] btn-block mt-8" />
      </form>
    </div>

    </div>
    </div>
  );
};

export default UpdatePage;