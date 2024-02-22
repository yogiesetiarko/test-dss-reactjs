import React from "react";

const FormProduct = () => {
  const [title, setTitle] = React.useState("");
  return(
    <div>
      Form Product
      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <div>
            Title
          </div>
          <div>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Email" 
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
            />          
          </div>
        </div>
        <div>
          <div>
            Price
          </div>
          <div>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Email" 
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
            />          
          </div>
        </div>
        <div>
          <div>
            Stock
          </div>
          <div>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Email" 
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
            />          
          </div>
        </div>
        
      </div>

      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="col-span-2">
          <div>
            Detail
          </div>
          <div>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Email" 
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
            />          
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="col-span-2">
          <div>
            Description
          </div>
          <div>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Email" 
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
            />          
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormProduct;