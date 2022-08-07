import React from "react";
import PropTypes from "prop-types"
const CardItem = (props) => {
  return (
    <>
      <div className="card-sw">
        <div className="imagen">imagen</div>
        <div className="cont">{props.item.name}</div>
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
