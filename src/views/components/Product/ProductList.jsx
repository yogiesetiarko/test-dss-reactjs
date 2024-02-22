import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  // fetchTheData, 
  use, 
  fetchDataFromElectron 
} from '../../../mockups/data.js';
import {FiEdit2, FiTrash2} from "react-icons/fi"

const ProductList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("")

  let responseElectron = use(fetchDataFromElectron('get:products'));

  const goToAddProducts = () => {
    navigate('/product/add')
  }

  return(
    <section>
        <div>
          <div className="flex items-baseline justify-between my-4">
            <div>
              <button className="bg-[#ff8000]" onClick={goToAddProducts}>Add Product</button>
            </div>
            <div>
              <input 
                type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
              />
            </div>
          </div>

          <div className='grid grid-rows-1 border border-white rounded'>
            <table className="">
              <thead className="">
                <tr>
                  <th className="py-4">Title</th>
                  <th className="py-4">Price</th>
                  <th className="py-4">Stock</th>
                  <th className="py-4">Action</th>
                </tr>
              </thead>
              <tbody className="">
                {responseElectron.data.map((item, index) => (
                  <tr key={index}>
                    <td className="">
                      <div className="flex justify-center">
                        {item.title}
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-end">
                        {item.price}
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-end">
                        {item.stock}
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-center">
                        <button>
                          <FiEdit2 />
                        </button>
                        <button>
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}                
              </tbody>
            </table>
          </div>

        </div>
    </section>
  );
}

export default ProductList;