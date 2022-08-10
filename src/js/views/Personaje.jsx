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
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title">{character?.name}</h1>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </>
  );
};
