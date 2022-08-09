import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardItem from "./CardItem.jsx";
import CardPlanet from "./CardPlanet.jsx";

const CarausellItem = (props) => {
  //destructuracion
  const { store } = useContext(Context);
  console.log(store)
  return (
    <>
      {props.nature == "people" ? (
        <div className="container">
          <div className="card-padre">
            {store.people.map((item,index) => {
              return <CardItem key={item.created} index={index} item={item}/>;
            })}
          </div>
        </div>
      ) : props.nature == "planet" ? (
        <div className="container">
          <div className="card-padre">
            {store.planets.map((item) => {
              return <CardPlanet key={item.created} item={item}/>;
            })}
          </div>
        </div>
        
        //<h1>NO HAY PLANETAS</h1>
      ) : null}
      {/* <div className="container">
        <div className="card-padre">
          {store.people.map((item) => {
            return <CardItem />;
          })}
        </div>
      </div> */}
    </>
  );
};
export default CarausellItem;
