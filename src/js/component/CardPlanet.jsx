import React, {useContext} from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CardPlanet = (props) => {
  const {store,actions} = useContext(Context)
  return (
    <>
      <div className="card-sw">
        <div className="imagen">
          {props.index == 0 ?
            <img src={`https://starwars-visualguide.com/assets/img/planets/${Math.floor(Math.random()*10+1)}.jpg`} className="card-img-top" alt="..."/>:
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.index+1}.jpg`} className="img2" alt="..."/>
          }
          {/* <img src={`https://starwars-visualguide.com/assets/img/planets/${props.index+1}.jpg`} className="card-img-top" alt="..."/> */}
        </div>
        <div className="cont">
          <h2>{props.item.name}</h2>
          <div><span>Population: {props.item.population}</span></div>
          <div><span>Terrain: {props.item.terrain}</span></div>
          <div><span>Diameter: {props.item.diameter}</span></div>
          </div>
        <div className="piepag">
        <Link to={`/planeta/${props.index}`} className="btn btn-outline-primary me">Learn More!
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
CardPlanet.propTypes={
    item: PropTypes.object
}
export default CardPlanet