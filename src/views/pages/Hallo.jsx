import React from "react";

function Hallo() {
  
  const [text, ] = React.useState("Hallooooo")
  return(
    <div>
      {text}
    </div>
  );
}

export default Hallo;