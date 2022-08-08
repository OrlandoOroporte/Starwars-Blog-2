import React from "react";
import PropTypes from "prop-types"
const CardItem = (props) => {
  return (
    <>
      <div className="card-sw">
        <div className="imagen">imagen</div>
        <div className="cont">
          <h2>{props.item.name}</h2>
          <div><span>Gender: {props.item.gender}</span></div>
          <div><span>Hair: {props.item.hair_color}</span></div>
          <div><span>Eye: {props.item.eye_color}</span></div>
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
CardItem.propTypes={
    item: PropTypes.object
}
export default CardItem 
