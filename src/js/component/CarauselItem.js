import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardItem from "./CardItem.jsx";

const CarausellItem = (props) => {
  //destructuracion
  const { store } = useContext(Context);
  return (
    <>
      {props.nature == "people" ? (
        <div className="container">
          <div className="card-padre">
            {store.people.map((item) => {
              return <CardItem key={item.created} item={item}/>;
            })}
          </div>
        </div>
      ) : props.nature == "planet" ? (
        <h1>NO HAY PLANETAS</h1>
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
