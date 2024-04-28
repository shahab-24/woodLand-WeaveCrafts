import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'

const AddCrafts = () => {
  const  { user } = useContext(AuthContext);


    const handleAddcrafts = (e) => {
      e.preventDefault();
        const form = e.target;
      const name = user?.userName;
      const price = form.price.value;
      const image = form.image.value;
      const desc = form.description.value;
      const processTime = form.processing_time.value;
      const rating = form.rating.value;
      const category = form.subcategory_name.value;
      const itemName = form.item_name.value;
      const customization = form.customization.value;
      const stock_status = form.stock_status.value;
      
      const email = user?.email;
  
    
  
      const info = { name, price, image,  email, desc, processTime, rating, category, itemName, customization, stock_status};
    console.log(info);

  
      fetch(" https://woodland-weave-crafts-server-7no6hpbe7-shahab-uddins-projects.vercel.app/addcrafts",{
        method: "POST",
        headers: { "Content-type": "application/json" },
        body:JSON.stringify(info)
      })
        .then(res => res.json())
        .then(data =>{
          if (data?.insertedId) {
            Swal.fire({
              title: 'success!',
              text: 'You Have Added a Crafts Item',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
              form.reset();
          
        }
      })
    }





  return (
    <div className="craftsContainer pt-10">
       <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold mb-10 text-center">CRAFTS ITEMS</h2>
      <form onSubmit={handleAddcrafts}>
      {/* name and quantity */}
        <div className="md:flex gap-4 md-8">
            <div className="md:w-1/2">
            <label className="form-control w-full">
  <div className="label">
    <span className="label-text">User Name</span>
    
  </div>
  <input type="text" placeholder="User Name" name="userName" className="input input-bordered md:w-full" />
  
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">User Email</span>
    
  </div>
  <input type="text" placeholder="User Email" name="userEmail" className="input input-bordered md:w-full" />
  
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
  <input type="text" placeholder="description" name="description" className="input input-bordered md:w-full" />
  
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Price</span>
    
  </div>
  <input type="text" placeholder="Price" name="price" className="input input-bordered md:w-full" />
  
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
  <input type="text" placeholder="Rating" name="rating" className="input input-bordered md:w-full" />
  
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Processing Time</span>
    
  </div>
  <input type="text" placeholder="Proccesing time" name="processing_time" className="input input-bordered md:w-full" />
  
              </label>
            </div>
            
        </div>


        <div className="md:flex gap-4 md-8">
        <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Customization</span>
    
  </div>
  <input type="text" placeholder="customization" name="customization" className="input input-bordered md:w-full" />
  
              </label>
            </div>

            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Stock Status</span>
    
  </div>
  <input type="text" placeholder="stock status" name="stock_status" className="input input-bordered md:w-full" />
  
              </label>
            </div>

        </div>

        <div className="md:flex gap-4 md-8">
        <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Subcategory Name</span>
    
  </div>
  <input type="text" placeholder="subcategory name" name="subcategory_name" className="input input-bordered md:w-full" />
  
              </label>
            </div>

            <div className="md:w-1/2">
              <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Item Name</span>
    
  </div>
  <input type="text" placeholder="itemName" name="item_name" className="input input-bordered md:w-full" />
  
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
  <input type="text" placeholder="image URL" name="image" className="input input-bordered md:w-full" />
  
              </label>
            </div>
            
            
        </div>
        <input type="submit" value="ADD" className="text-xl text-white font-bold btn bg-black hover:bg-[grey] btn-block mt-8" />
      </form>
    </div>

    </div>
  );
};

export default AddCrafts;