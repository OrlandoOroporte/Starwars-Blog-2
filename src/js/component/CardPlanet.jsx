import React from "react";
import PropTypes from "prop-types"
const CardPlanet = (props) => {
    console.log(props)
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
          <button type="button">Learn more</button>
          <div className="icon">
            <i className="far fa-heart"></i>
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