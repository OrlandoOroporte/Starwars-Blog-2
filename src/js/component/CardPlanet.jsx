import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const CardPlanet = (props) => {
  return (
    <>
      <div className="card-sw">
        <div className="imagen">imagen</div>
        <div className="cont">
          <h2>{props.item.name}</h2>
          <div><span>Population: {props.item.population}</span></div>
          <div><span>Terrain: {props.item.terrain}</span></div>
          <div><span>Diameter: {props.item.diameter}</span></div>
          </div>
        <div className="piepag">
        <Link to={`/planeta/${props.index}`} className="btn btn-outline-primary">Learn More!
        </Link>
          <div className="icon">
          <button type="button" className="btn btn-outline-warning">
            <i className="far fa-heart"></i>
          </button>
          </div>
        </div>
      </div>
    </>
  );
  
};
CardPlanet.propTypes={
    item: PropTypes.object
}
export default CardPlanet