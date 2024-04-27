import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftsCard from "./CraftsCard";
import Gallery from "./Gallery";



const HomePage = () => {
  const crafts = useLoaderData();
 
  return (
    <div className="">
        <Banner></Banner>
        <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-500 text-center">
        Crafts Items Section
        </h2>
        <p className="text-xl font-semibold">Handcrafted wooden all items available here with a minimalist design. Buy warmth and sophistication to any room's decore.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-10 mb-6 mx-auto">
        
        
        {
          crafts.map(craft => <CraftsCard key={crafts._id} craft={craft}
          >

          </CraftsCard>)
        }
        
        </div>
        <Gallery></Gallery>
        <h2 className="text-4xl font-bold text-center mt-6 text-gray-400">Customers Review</h2>

        <div className="mb-10 mt-6 craftsContainer grid md:grid-cols-3 gap-4">
        
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Sophie </h2>
    <p>Absolutely in love with the pieces I ordered from Woodland Weave Crafts! The craftsmanship is exceptional, and each item adds a touch of rustic charm to my home. The website was easy to navigate, and the checkout process was a breeze. Cannot wait to shop here again!</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Michael  </h2>
    <p>I recently purchased a jute wall hanging and a wooden salad bowl set from Woodland Weave Crafts, and I am impressed with the quality of both items. The website offers a great selection of handcrafted treasures, and the product descriptions were helpful in making my decision. My only suggestion would be to add more variety in the kitchenware section. Overall, a positive experience!</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
 <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Michael  </h2>
    <p>I recently purchased a jute wall hanging and a wooden salad bowl set from Woodland Weave Crafts, and I am impressed with the quality of both items. The website offers a great selection of handcrafted treasures, and the product descriptions were helpful in making my decision. My only suggestion would be to add more variety in the kitchenware section. Overall, a positive experience!</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
      
        </div>
       
    </div>
  );
};

export default HomePage;