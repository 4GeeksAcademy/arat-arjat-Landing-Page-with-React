import React from "react";

export const Jumbotron = (props) =>{
return(
<div className="Jumbotron" style={{backgroundColor:"khaki"}}>
    <h1>{props.title}</h1>
  <p style={{fontSize:"2rem"}}>{props.description}</p>
</div>
);
};
export default Jumbotron; 