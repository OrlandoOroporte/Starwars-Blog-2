import React, {useContext} from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


const CardItem = (props) => {
  const {store,actions} = useContext(Context)
  console.log(props.item)
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
        <Link to={`/personaje/${props.index}`} className="btn btn-outline-primary">Learn More!
        </Link>
          <div className="icon">
          <button type="button" className="btn btn-outline-warning" onClick={() => actions.setFavorites(props.item.created)} >
            <i className="far fa-heart"></i>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};
CardItem.propTypes={
    item: PropTypes.object,
    index: PropTypes.number,
}
export default CardItem 
