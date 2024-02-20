import React from "react";
import { 
  // useLocation,
  // useParams
 } from "react-router-dom";

function Hallo() {
  // const location = useLocation();
  // const params = useParams();
  // const {state} = useLocation();
  // let userId = location.state.userId;
  // console.log("state", state)
  // console.log("location", location)
  // console.log("params", params)
  
  const [text, ] = React.useState("Hallooooo")
  return(
    <div>
      {text} 
    </div>
  );
}

export default Hallo;