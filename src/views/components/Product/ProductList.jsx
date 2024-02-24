import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  // fetchTheData, 
  use, 
  fetchDataFromElectron 
} from '../../../mockups/data.js';
import {FiEdit2, FiTrash2} from "react-icons/fi"
const api = window.api;

const ProductList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("")

  // api.receive('pushDetails', (data) => { console.log(data) });

  let responseElectron = use(fetchDataFromElectron('get:products'));
  console.log("responseElectron", responseElectron)
  // api.send('get:products', {'aha':'halo'});
  // api.receive('get:products', {'aha':'halo'}).then((result) => { return result });
  // let rres = api.receive('get:products', {'aha':'halo'});
  // let rres = api.invoke('get:products', {'aha':'halo'}).then((result) => { return result; });
  // console.log("rres", rres)

  const goToAddProducts = () => {
    navigate('/product/add')
  }

  const onEdit = (id) => {
    navigate(`/product/edit/${id}`)
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
              <thead className="border border-white rounded">
                <tr>
                  <th className="py-4 border border-white">Title</th>
                  <th className="py-4 border border-white">Price</th>
                  <th className="py-4 border border-white">Stock</th>
                  <th className="py-4 border border-white">Action</th>
                </tr>
              </thead>
              <tbody className="">
                {responseElectron.data.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-white py-4">
                      <div className="flex justify-center">
                        {item.title}
                      </div>
                    </td>
                    <td className="border border-white py-4">
                      <div className="flex justify-end mx-2">
                        {item.price}
                      </div>
                    </td>
                    <td className="border border-white py-4">
                      <div className="flex justify-end mx-2">
                        {item.stock}
                      </div>
                    </td>
                    <td className="border border-white py-4">
                      <div className="flex justify-center">
                        <button 
                          onClick={() => onEdit(item._id)}
                          className="mx-2"
                        >
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