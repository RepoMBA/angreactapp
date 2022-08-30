import React from "react";
import { Link, Redirect } from "react-router-dom";

function CardComp(props) {
  return <Link to={props.link}><div className="card-tile-div">{props.title}</div></Link>;
}

export default CardComp;
