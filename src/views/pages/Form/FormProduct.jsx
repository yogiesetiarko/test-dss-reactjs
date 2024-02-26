import React, { useEffect } from "react";
import {useDropzone} from 'react-dropzone';
import {useParams, useNavigate} from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import Swal from "sweetalert2";
const api = window.api;

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "50px",
  borderWidth: 1,
  borderRadius: 8,
  borderColor: "lightgray",
  backgroundColor: "#3b3b3b",
  color: "lightgray",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};
const activeStyle = {
  borderColor: "#2196f3",
};
const acceptStyle = {
  borderColor: "#00e676",
};
const rejectStyle = {
  borderColor: "#ff1744",
};
const img = {
  display: "block",
  width: "20%",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "6px",
  paddingTop: "20px",
  paddingBottom: "20px",
};

const FormProduct = () => {
  const navigate = useNavigate();
  let { 
    id, 
    // action 
  } = useParams();

  const [title, setTitle] = React.useState("");
  const [detail, setDetail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [stock, setStock] = React.useState(0);
  const [rating, setRating] = React.useState(0);
  const [imagesPrev, setImagesPrev] = React.useState("");

  useEffect(() => {
    if(typeof id !== 'undefined') {
      const getData = async () => {
        let payload = {
          id: id
        }
        let response = await api.invoke('get:productById', payload).then((result) => { return result });
        setTitle(response.data.title)
        setStock(response.data.stock)
        setPrice(response.data.price)
        setDetail(response.data.detail_product)
        setDescription(response.data.description)
        setImagesPrev(response.data.image)
        setRating(response.data.rating)
      }
      getData();
    }
  }, [id,])

  const onDrop = React.useCallback(async (acceptedFiles) => {

    let tesRes = await getBase64(acceptedFiles[0]);
    setImagesPrev(tesRes)

    //push files into array
    // setImages(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);

  const {
    // acceptedFiles,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const getBase64 = file => {
    return new Promise(resolve => {
      // let fileInfo;
      let baseURL = "";
      
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {

        // Make a fileInfo Object
        baseURL = reader.result;
        
        resolve(baseURL);
      };
    });
  };

  const style = React.useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(title === "") {
      Swal.fire({
        title: "Error.",
        icon: "error",
        text: `Title empty.`,
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    } else if(detail === "") {
      Swal.fire({
        title: "Error.",
        icon: "error",
        text: `Detail empty.`,
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    } else if(description === "") {
      Swal.fire({
        title: "Error.",
        icon: "error",
        text: `Descrciption empty.`,
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    } else if(price === 0) {
      Swal.fire({
        title: "Error.",
        icon: "error",
        text: `Price can't be 0.`,
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    } else if(imagesPrev === "") {
      Swal.fire({
        title: "Error.",
        icon: "error",
        text: `Please choose Image.`,
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    } else {
      let formPayload = {
        title: title,
        price: Number(price),
        stock: Number(stock),
        detail: detail,
        description: description,
        image_product: imagesPrev,
        rating: rating,
      }
  
      // config for headers
      let token = "emptyToken"
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
  
      let payload = {
        config: config,
        form: formPayload,
        id: null
      };

      let action = "post:newProduct";
  
      if(typeof id !== 'undefined') {
        payload.id = id
        action = "put:productById"
      }

      let responseSubmit = await api.invoke(action, payload).then((result) => { return result });
      if(responseSubmit.success) {
        Swal.fire({
          title: "Success.",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "OK",
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
        }).then((result) => {
          // console.log("result", result);
          if (result.isConfirmed === true) {
            navigate('/products');
          }
        });
      }
    }
  }

  const ratingChanged = (newRating) => {
    setRating(newRating)
  }

  const handleBack = () => {
    navigate('/products');
  }

  return(
    <div>
      {typeof id !== 'undefined' ? (<>{'Edit'}</>) : (<>{'Add'}</>)} Form Product {typeof id !== 'undefined' ? (<>{title}</>) : null}
      <form>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div>
            <div>
              Title
            </div>
            <div>
              <input 
                type="text" 
                value={title} 
                // defaultValue={responseElectron.data.title}
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Title" 
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
                type="number"
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                placeholder="Price" 
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
                type="number"
                value={stock} 
                onChange={(e) => setStock(e.target.value)} 
                placeholder="Email" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
              />          
            </div>
          </div>
          <div>
            <div>
              Rating
            </div>
            <div>
              <Rating 
                onClick={ratingChanged} 
                initialValue={rating} 
                SVGstyle={{'display': 'inline'}}
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
              <textarea 
                rows={6}
                value={detail} 
                onChange={(e) => setDetail(e.target.value)} 
                placeholder="Detail" 
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
              <textarea 
                rows={6}
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
              />          
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="col-span-2">
            <div>
              Image
            </div>
            <div className="">
              <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag n drop some files here, or click to select files</p>
                }
              </div>
            </div>
          </div>
        </div>
      

      {imagesPrev === "" ? null : (<>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="col-span-2">
            <div>
              Preview Image
            </div>
            <div className="border rounded-md border-white">
              {imagesPrev === "" ? null : (<>
                <img
                  src={imagesPrev}
                  style={img}
                  alt="bb"
                />
              </>)}
            </div>
          </div>
        </div>
      </>)}

        <div className="grid grid-cols-3 gap-4 my-4">
          <button className="bg-green-600" onClick={handleSubmit}>
            {typeof id !== 'undefined' ? <>{'Update'}</> : <>{'Save'}</>}
          </button>
          <button className="bg-red-600" onClick={handleBack}>
            Back
          </button>
        </div>

      </form>
    </div>
  );
}

export default FormProduct;