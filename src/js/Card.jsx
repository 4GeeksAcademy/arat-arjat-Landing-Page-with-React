import React from "react";

export const Card = (props) =>{
return (
<div className="card col-3" >
  <img className="card-img-top" style={{width:"auto", border: "0", height:"300px", objectFit:"cover" }} src={props.img} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title" >{props.title}</h4>
    <p className="card-text">{props.descripcion}</p>
  </div>
</div>
);
};

 export default Card;