import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Personaje = () => {
  const params = useParams();
  const { store } = useContext(Context);
  const character = store.people.find((item, index) => {
    return index == params.index;
  });
  return (
    <>
      <div className="card mb-3">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(params.index)+1}.jpg`} alt="..." />
       <div className="card-body">
          <h1 className="card-title text-secondary">{character?.name}</h1>
          <p className="card-text text-secondary">
            <span>{character?.hair_color}</span>
            <span>{character?.skin_color}</span>
            <span>{character?.eye_color}</span>
            <span>{character?.birth_year}</span>
            </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </>
  );
};
