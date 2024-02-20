// import React from "react";
import { 
  // fetchTheData, 
  use, 
  fetchDataFromElectron 
} from '../../../mockups/data.js';

const ProductList = () => {

  let responseElectron = use(fetchDataFromElectron('get:products'));

  return(
    <section>
        <div>
          <div className="grid grid-cols-4">
            <div>
              <button className="bg-[#ff8000]">Add Product</button>
            </div>
          </div>

          {responseElectron.data.map((item, index) => (
            <div className="grid grid-cols-1 bg-[#ff8000] my-2 rounded" key={`${item.title}-${item.price}`}>
              <div>
                {index}
              </div>
              <div className="grid grid-cols-4">
                <div className='text-[#5c5854]'>
                  {item.title}
                </div>
                <div className='text-[#5c5854]'>
                  {item.price}
                </div>
                <div className='text-[#5c5854]'>
                  {item.stock}
                </div>
                <div className='text-[#5c5854]'>
                  Edit | Delete
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default ProductList;